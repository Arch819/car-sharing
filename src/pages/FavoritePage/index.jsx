import { useSelector } from "react-redux";
import { selectFavorites } from "store/favorites/favoritesSelector";
import Section from "../../components/Section";
import CarsList from "components/AdvertsList";
import EmptyMessage from "components/EmptyMessage";
import { HomeBtnStyle } from "pages/HomePage/Home.styled";
import TitlePage from "components/TitlePage";

function FavoritePage() {
  const favorites = useSelector(selectFavorites);

  return (
    <Section>
      <div className="container">
        <TitlePage text="Favorite" fs={36} mb={50} />
        {favorites.length > 0 ? (
          <CarsList adverts={favorites} />
        ) : (
          <EmptyMessage>
            No favorites yet. Add some cars to your favorites!
            <HomeBtnStyle to="/catalog">Go to adverts</HomeBtnStyle>
          </EmptyMessage>
        )}
      </div>
    </Section>
  );
}

export default FavoritePage;
