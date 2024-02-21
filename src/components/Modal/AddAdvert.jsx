import CloseModal from "components/CloseModal";
import React from "react";
import { AddAdvertBoxStyle } from "./AddAdvert.styled";
import AddAdvertForm from "components/form/AddAdvert";

function AddAdvert({ closeModal }) {
  return (
    <AddAdvertBoxStyle>
      <CloseModal closeModal={closeModal} />
      <div>Add Advert</div>
      <AddAdvertForm />
    </AddAdvertBoxStyle>
  );
}

export default AddAdvert;
