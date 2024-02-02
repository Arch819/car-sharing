import React, { useEffect, useState } from "react";
import Section from "../../components/Section";
import Filters from "../../components/Filters";
import CarsList from "../../components/AdvertsList";
import { LoadMoreBtn } from "./CatalogPage.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectAdverts, selectPage } from "../../store/adverts/selectors";
import { getAllAdvertsThunk } from "../../store/adverts/advertsThunk";
import { selectIsLoading } from "store/appState/appStateSelectors";

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
        {!isLoading && (
          <LoadMoreBtn onClick={handleNextPage}>Load more</LoadMoreBtn>
        )}
      </div>
    </Section>
  );
}

export default CatalogPage;
