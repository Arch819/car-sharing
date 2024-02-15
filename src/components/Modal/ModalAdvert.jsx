import sprite from "../../images/sprite.svg";
import AdvertItemTitle from "../AdvertItemTitle";
import {
  BottomTextItemStyle,
  BottomTextListStyle,
} from "../AdvertItem/AdvertItem.styled";

import {
  AccessoriesTittleStyle,
  AdvertDescriptionStyle,
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

function ModalAdvert({ data, closeModal }) {
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

  return (
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
            <BottomTextItemStyle>Engine Size: {engineSize}</BottomTextItemStyle>
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
            <RentalConditionsSpanStyle>{MinimumAge}</RentalConditionsSpanStyle>
          </RentalConditionsItemStyle>
          <RentalConditionsItemStyle>{driverLicense}</RentalConditionsItemStyle>
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
            <RentalConditionsSpanStyle>{rentalPrice}</RentalConditionsSpanStyle>
          </RentalConditionsItemStyle>
        </RentalConditionsListStyle>
      </ModalTextBoxStyle>
      <ModalSubmitBtnStyle className="btn" href="tel:+380730000000">
        Rental car
      </ModalSubmitBtnStyle>
    </ModalContainerStyle>
  );
}

export default ModalAdvert;
