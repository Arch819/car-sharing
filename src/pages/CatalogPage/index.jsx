import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdvertsThunk,
  getAllAdvertsThunk,
} from "../../store/adverts/advertsThunk";
import { selectAdverts, selectTotalPage } from "../../store/adverts/selectors";
import Section from "../../components/Section";
import Filters from "../../components/Filters";
import CarsList from "../../components/AdvertsList";
import { LoadMoreBtn } from "./CatalogPage.styled";

function CatalogPage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const totalPage = useSelector(selectTotalPage);

  useEffect(() => {
    if (!adverts.length) {
      dispatch(getAllAdvertsThunk());
    }
  }, [adverts.length, dispatch]);

  useEffect(() => {
    if (page <= totalPage) {
      dispatch(getAdvertsThunk({ page }));
    }
  }, [dispatch, page, totalPage]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Section>
      <div className="container">
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
