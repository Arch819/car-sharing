import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import Modal from "../Modal";
import AdvertItemTitle from "../AdvertItemTitle";
import {
  addFavorites,
  deleteFavorites,
} from "../../store/favorites/favoritesSlice";
import { selectFavorites } from "../../store/favorites/favoritesSelector";
import { searchIsFavorite } from "../../utils/searchIsFavorite";
import {
  BottomTextItemStyle,
  BottomTextListStyle,
  BottomTextStyle,
  HeartBtnStyle,
  HeartBtnSvgStyle,
  ImageBoxStyle,
  ItemLearnMoreBtn,
  ItemPriceStyle,
  TopTextStyle,
} from "./AdvertItem.styled";

function CarItem({ data }) {
  const [modal, setModal] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectFavorites);

  useEffect(() => {
    searchIsFavorite(isFavorite, data.id, setFavorite);
  }, [data.id, isFavorite]);

  const {
    id,
    year,
    model,
    make,
    type,
    img,
    rentalPrice,
    address,
    rentalCompany,
  } = data;
  const [, city, country] = address.split(",");

  const handleModalToggle = useCallback(() => {
    setModal((prev) => !prev);
  }, []);

  const handleAddFavorite = useCallback(() => {
    if (favorite) {
      dispatch(deleteFavorites(data));
      setFavorite((prev) => !prev);
    } else {
      dispatch(addFavorites(data));
      setFavorite((prev) => !prev);
    }
  }, [dispatch, favorite, data]);

  return (
    <li>
      <ImageBoxStyle>
        <img src={img} alt={model} width={400} />
        <HeartBtnStyle onClick={handleAddFavorite}>
          <HeartBtnSvgStyle width={18} height={18} $isFavorite={favorite}>
            <use href={`${sprite}#icon-active`}></use>
          </HeartBtnSvgStyle>
        </HeartBtnStyle>
      </ImageBoxStyle>
      <div>
        <TopTextStyle>
          <AdvertItemTitle
            data={{ make, model: make.length < 10 ? model : null, year }}
          />
          <ItemPriceStyle>{rentalPrice}$</ItemPriceStyle>
        </TopTextStyle>
        <BottomTextStyle>
          <BottomTextListStyle>
            <BottomTextItemStyle>{city}</BottomTextItemStyle>
            <BottomTextItemStyle>{country}</BottomTextItemStyle>
            <BottomTextItemStyle>{rentalCompany}</BottomTextItemStyle>
          </BottomTextListStyle>
          <BottomTextListStyle>
            <BottomTextItemStyle>{type}</BottomTextItemStyle>
            <BottomTextItemStyle>{make}</BottomTextItemStyle>
            <BottomTextItemStyle>{id}</BottomTextItemStyle>
          </BottomTextListStyle>
        </BottomTextStyle>
        <ItemLearnMoreBtn className="btn" onClick={handleModalToggle}>
          Learn more
        </ItemLearnMoreBtn>
      </div>
      {modal && <Modal data={data} closeModal={handleModalToggle} />}
    </li>
  );
}

export default CarItem;
