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
import ModalAdvert from "components/Modal/ModalAdvert";

import AdvertsTools from "components/AdvartsTools";
import { selectProfile } from "store/auth/authSelectors";
import {
  AdvertItemStyled,
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
  const { role } = useSelector(selectProfile);

  useEffect(() => {
    searchIsFavorite(isFavorite, data.id, setFavorite);
  }, [data.id, isFavorite]);

  const { year, model, make, type, img, rentalPrice, address, rentalCompany } =
    data;

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
    <AdvertItemStyled>
      <ImageBoxStyle>
        <img src={img} alt={model} width={400} />
        <HeartBtnStyle onClick={handleAddFavorite}>
          <HeartBtnSvgStyle width={24} height={24} $isFavorite={favorite}>
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
            <BottomTextItemStyle>{address?.city}</BottomTextItemStyle>
            <BottomTextItemStyle>{address?.country}</BottomTextItemStyle>
            <BottomTextItemStyle>{rentalCompany}</BottomTextItemStyle>
          </BottomTextListStyle>
          <BottomTextListStyle>
            <BottomTextItemStyle>{type}</BottomTextItemStyle>
            <BottomTextItemStyle>{make}</BottomTextItemStyle>
          </BottomTextListStyle>
        </BottomTextStyle>
        <ItemLearnMoreBtn className="btn" onClick={handleModalToggle}>
          Learn more
        </ItemLearnMoreBtn>
      </div>
      {role === "admin" && <AdvertsTools />}
      {modal && (
        <Modal closeModal={handleModalToggle}>
          <ModalAdvert data={data} closeModal={handleModalToggle} />
        </Modal>
      )}
    </AdvertItemStyled>
  );
}

export default CarItem;
