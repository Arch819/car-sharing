import React, { useState } from "react";
import Section from "../../components/Section";
import { useSelector } from "react-redux";
import { selectFavorites } from "store/favorites/favoritesSelector";
import Filters from "components/Filters";
import CarsList from "components/AdvertsList";
import { LoadMoreBtn } from "pages/CatalogPage/CatalogPage.styled";

function FavoritePage() {
  const [page, setPage] = useState(1);
  const favorites = useSelector(selectFavorites);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Section>
      <div className="container">
        <h2>Favorite</h2>
        <Filters />
        <CarsList adverts={favorites} />
        {/* {!isLoading && ( */}
        <LoadMoreBtn onClick={handleNextPage}>Load more</LoadMoreBtn>
        {/* )} */}
      </div>
    </Section>
  );
}

export default FavoritePage;
