import { useEffect } from "react";
import { createPortal } from "react-dom";
import sprite from "../../images/sprite.svg";
import AdvertItemTitle from "../AdvertItemTitle";
import {
  BottomTextItemStyle,
  BottomTextListStyle,
} from "../AdvertItem/AdvertItem.styled";
import {
  AccessoriesTittleStyle,
  AdvertDescriptionStyle,
  BackdropModalStyle,
  ModalCloseStyle,
  ModalContainerStyle,
  ModalImgContainerStyle,
  ModalSubmitBtnStyle,
  ModalTextBoxStyle,
  ModalTopListBoxStyle,
  RentalConditionsItemStyle,
  RentalConditionsListStyle,
  RentalConditionsSpanStyle,
  RentalConditionsTitleStyle,
} from "./Modal.styled";

function Modal({ data, closeModal }) {
  const {
    id,
    year,
    model,
    engineSize,
    make,
    fuelConsumption,
    type,
    img,
    rentalPrice,
    address,
    accessories,
    description,
    functionalities,
    rentalConditions,
    mileage,
  } = data;
  const { MinimumAge, driverLicense, otherRequirements } = rentalConditions;

  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", closeESC);

    return () => {
      document.removeEventListener("keydown", closeESC);
      document.body.style.overflow = "auto";
      document.body.style.width = "100%";
    };
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.width = "calc(100% - 10px)";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.width = "100%";
    };
  }, []);

  const handleClickBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const modal = (
    <BackdropModalStyle onClick={handleClickBackdrop}>
      <ModalContainerStyle className="modal">
        <ModalCloseStyle onClick={closeModal}>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </ModalCloseStyle>
        <ModalImgContainerStyle>
          <img src={img} alt={model} width={470} />
        </ModalImgContainerStyle>
        <ModalTextBoxStyle>
          <AdvertItemTitle data={{ make, model, year }} />
          <ModalTopListBoxStyle>
            <BottomTextListStyle>
              <BottomTextItemStyle>{address?.city}</BottomTextItemStyle>
              <BottomTextItemStyle>{address?.country}</BottomTextItemStyle>
              <BottomTextItemStyle>Id: {id}</BottomTextItemStyle>
              <BottomTextItemStyle>Year: {year}</BottomTextItemStyle>
              <BottomTextItemStyle>Type: {type}</BottomTextItemStyle>
            </BottomTextListStyle>
            <BottomTextListStyle>
              <BottomTextItemStyle>
                Fuel Consumption: {fuelConsumption}
              </BottomTextItemStyle>
              <BottomTextItemStyle>
                Engine Size: {engineSize}
              </BottomTextItemStyle>
            </BottomTextListStyle>
          </ModalTopListBoxStyle>
          <AdvertDescriptionStyle>{description}</AdvertDescriptionStyle>
          <AccessoriesTittleStyle>
            Accessories and functionalities:
          </AccessoriesTittleStyle>
          <ModalTopListBoxStyle>
            <BottomTextListStyle>
              {accessories.map((acc, i) => (
                <BottomTextItemStyle key={i}>{acc}</BottomTextItemStyle>
              ))}
            </BottomTextListStyle>
            <BottomTextListStyle>
              {functionalities.map((fun, i) => (
                <BottomTextItemStyle key={i}>{fun}</BottomTextItemStyle>
              ))}
            </BottomTextListStyle>
          </ModalTopListBoxStyle>
          <RentalConditionsTitleStyle>
            Rental Conditions:
          </RentalConditionsTitleStyle>
          <RentalConditionsListStyle>
            <RentalConditionsItemStyle>
              Minimum age:{" "}
              <RentalConditionsSpanStyle>
                {MinimumAge}
              </RentalConditionsSpanStyle>
            </RentalConditionsItemStyle>
            <RentalConditionsItemStyle>
              {driverLicense}
            </RentalConditionsItemStyle>
            <br />
            <RentalConditionsItemStyle>
              {otherRequirements}
            </RentalConditionsItemStyle>
            <RentalConditionsItemStyle>
              Mileage:{" "}
              <RentalConditionsSpanStyle>
                {mileage.toLocaleString("en-US")}
              </RentalConditionsSpanStyle>
            </RentalConditionsItemStyle>
            <RentalConditionsItemStyle>
              Price:{" "}
              <RentalConditionsSpanStyle>
                {rentalPrice}
              </RentalConditionsSpanStyle>
            </RentalConditionsItemStyle>
          </RentalConditionsListStyle>
        </ModalTextBoxStyle>
        <ModalSubmitBtnStyle className="btn" href="tel:+380730000000">
          Rental car
        </ModalSubmitBtnStyle>
      </ModalContainerStyle>
    </BackdropModalStyle>
  );

  return createPortal(modal, document.getElementById("modal"));
}

export default Modal;
