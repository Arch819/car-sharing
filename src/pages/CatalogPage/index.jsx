import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdvertsThunk } from "../../store/adverts/advertsThunk";
import { selectAdverts, selectTotalPage } from "../../store/adverts/selectors";
import Section from "../../components/Section";
import Filters from "../../components/Filters";
import CarsList from "../../components/AdvertsList";
import { LoadMoreBtn } from "./CatalogPage.styled";
import { Notify } from "notiflix";
import TitlePage from "components/TitlePage";

function CatalogPage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const totalPage = useSelector(selectTotalPage);

  useEffect(() => {
    dispatch(getAdvertsThunk({ page })).then(({ payload }) => {
      page === 1 && Notify.success(`Found ${payload.total} adverts`);
    });
  }, [dispatch, page]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Section>
      <div className="container">
        <TitlePage text="Adverts" mb={60} />
        <Filters />
        <CarsList adverts={adverts} />
        {totalPage > 1 && page < totalPage && (
          <LoadMoreBtn onClick={handleNextPage}>Load more</LoadMoreBtn>
        )}
      </div>
    </Section>
  );
}

export default CatalogPage;
