import CarItem from "../AdvertItem";
import { CarsListStyle } from "./AdvertsList.styled";

function CarsList({ adverts }) {
  return (
    <CarsListStyle>
      {adverts.map((advert) => {
        return <CarItem key={advert.id} data={advert} />;
      })}
    </CarsListStyle>
  );
}

export default CarsList;
