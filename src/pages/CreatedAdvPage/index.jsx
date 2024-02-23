import AddBtn from "components/AddBtn";
import Modal from "components/Modal";
import AddAdvert from "components/Modal/AddAdvert";
import Section from "components/Section";
import { useState } from "react";
import { AddAdvertContainerStyle } from "./CreatedAdvPage.styled";

function CreatedAdvPage() {
  const [addAdvertModal, setAddAdvertModal] = useState(false);

  const handleToggleModal = () => {
    setAddAdvertModal((prev) => !prev);
  };
  return (
    <Section>
      <AddAdvertContainerStyle className="container">
        <h2>Created adv</h2>
        <AddBtn openModal={handleToggleModal} />
      </AddAdvertContainerStyle>
      {addAdvertModal && (
        <Modal closeModal={handleToggleModal}>
          <AddAdvert closeModal={handleToggleModal} />
        </Modal>
      )}
    </Section>
  );
}

export default CreatedAdvPage;
