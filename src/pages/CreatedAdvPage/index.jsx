import AddBtn from "components/AddBtn";
import Modal from "components/Modal";
import AddAdvert from "components/Modal/AddAdvert";
import Section from "components/Section";
import { useEffect, useState } from "react";
import {
  AddAdvertContainerStyle,
  AddAdvertTitle,
} from "./CreatedAdvPage.styled";
import { useDispatch, useSelector } from "react-redux";
import CarsList from "components/AdvertsList";
import { getFilterAdvertsThunk } from "store/adverts/advertsThunk";
import { selectAdverts } from "store/adverts/selectors";

function CreatedAdvPage() {
  const [addAdvertModal, setAddAdvertModal] = useState(false);

  const dispatch = useDispatch();
  const createdAd = useSelector(selectAdverts);

  useEffect(() => {
    !createdAd.length && dispatch(getFilterAdvertsThunk({ owner: true }));
  }, [createdAd.length, dispatch]);

  const handleToggleModal = () => {
    setAddAdvertModal((prev) => !prev);
  };
  return (
    <Section>
      <AddAdvertContainerStyle className="container">
        <AddAdvertTitle>Created adv</AddAdvertTitle>
        {createdAd && <CarsList adverts={createdAd} />}
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
