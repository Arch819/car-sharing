import sprite from "../../images/sprite.svg";
import { ModalCloseStyle } from "./CloseModal.stuled";

function CloseModal({ closeModal }) {
  return (
    <ModalCloseStyle onClick={closeModal}>
      <svg width={24} height={24}>
        <use href={`${sprite}#icon-close`}></use>
      </svg>
    </ModalCloseStyle>
  );
}

export default CloseModal;
