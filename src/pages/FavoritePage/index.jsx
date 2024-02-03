import { useSelector } from "react-redux";
import { selectFavorites } from "store/favorites/favoritesSelector";
import Section from "../../components/Section";
import CarsList from "components/AdvertsList";
import EmptyMessage from "components/EmptyMessage";
import { FavoriteTitleStyle } from "./FavoritePage.styled";

function FavoritePage() {
  const favorites = useSelector(selectFavorites);

  return (
    <Section>
      <div className="container">
        <FavoriteTitleStyle>Favorite</FavoriteTitleStyle>
        {favorites.length > 0 ? (
          <CarsList adverts={favorites} />
        ) : (
          <EmptyMessage>
            No favorites yet. Add some cars to your favorites!
          </EmptyMessage>
        )}
      </div>
    </Section>
  );
}

export default FavoritePage;
