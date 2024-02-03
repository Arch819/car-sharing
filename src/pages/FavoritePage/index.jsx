// import React, { useState } from "react";
import Section from "../../components/Section";
import { useSelector } from "react-redux";
import { selectFavorites } from "store/favorites/favoritesSelector";
import Filters from "components/Filters";
import CarsList from "components/AdvertsList";

function FavoritePage() {
  const favorites = useSelector(selectFavorites);

  return (
    <Section>
      <div className="container">
        <h2>Favorite</h2>
        <Filters />
        <CarsList adverts={favorites} />
      </div>
    </Section>
  );
}

export default FavoritePage;
