import AddBtn from "components/AddBtn";
import Modal from "components/Modal";
import AddAdvert from "components/Modal/AddAdvert";
import Section from "components/Section";
import { useState } from "react";

function CreatedAdvPage() {
  const [addAdvertModal, setAddAdvertModal] = useState(false);

  const handleToggleModal = () => {
    setAddAdvertModal((prev) => !prev);
  };
  return (
    <Section>
      <div className="container">
        <h2>Created adv</h2>
        <AddBtn openModal={handleToggleModal} />
      </div>
      {addAdvertModal && (
        <Modal closeModal={handleToggleModal}>
          <AddAdvert closeModal={handleToggleModal} />
        </Modal>
      )}
    </Section>
  );
}

export default CreatedAdvPage;
