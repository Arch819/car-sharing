import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "store/appState/appStateSelectors";
import { getAllAdvertsThunk } from "../../store/adverts/advertsThunk";
import { selectAdverts } from "../../store/adverts/selectors";
import Section from "../../components/Section";
import Filters from "../../components/Filters";
import CarsList from "../../components/AdvertsList";
import { LoadMoreBtn } from "./CatalogPage.styled";

function CatalogPage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllAdvertsThunk({ page }));
  }, [dispatch, page]);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Section>
      <div className="container">
        <Filters />
        <CarsList adverts={adverts} />
        {!isLoading && adverts.length > 12 && (
          <LoadMoreBtn onClick={handleNextPage}>Load more</LoadMoreBtn>
        )}
      </div>
    </Section>
  );
}

export default CatalogPage;
