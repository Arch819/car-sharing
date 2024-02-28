// import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import { selectProfile } from "store/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { updateAvatarThunk } from "store/auth/authThunk";

import {
  AvatarChangeLabel,
  AvatarForm,
  AvatarImageStyle,
  AvatarSvgStyle,
  IconBtnSvg,
  ImageBoxStyle,
  InfoUserItemStyle,
  InfoUserListStyle,
  ProfileBoxStyle,
  ProfileTitleStyle,
} from "./Profile.styled";
import CloseModal from "components/CloseModal";
import { useState } from "react";

function Profile({ closeModal }) {
  const [avatar, setAvatar] = useState(useSelector(selectProfile).avatar);

  const dispatch = useDispatch();
  const {
    name,
    email,
    createdAt,
    // createdAdverts, favorites
  } = useSelector(selectProfile);

  const normalizedDate = format(createdAt, "dd-MM-yyyy");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (typeof file != "undefined") {
      dispatch(updateAvatarThunk(file)).then(({ payload }) => {
        payload && setAvatar(payload.avatar);
      });
    }
  };

  return (
    <ProfileBoxStyle>
      <CloseModal onClick={closeModal} />
      <ProfileTitleStyle>Profile</ProfileTitleStyle>
      <ImageBoxStyle>
        {avatar ? (
          <AvatarImageStyle src={avatar} alt="avatar" />
        ) : (
          <AvatarSvgStyle>
            <use href={`${sprite}#icon-user`}></use>
          </AvatarSvgStyle>
        )}
        <AvatarForm id="upload-form">
          <AvatarChangeLabel>
            <input
              type="file"
              name="file"
              style={{ display: "none" }}
              onChange={handleAvatarChange}
              accept=".png, .jpg"
            />
            <IconBtnSvg>
              <use href={`${sprite}#icon-upload-avatar`}></use>
            </IconBtnSvg>
          </AvatarChangeLabel>
        </AvatarForm>
      </ImageBoxStyle>
      <InfoUserListStyle>
        <InfoUserItemStyle>
          <p>Name: {name}</p>
        </InfoUserItemStyle>
        <InfoUserItemStyle>
          <p>Email: {email}</p>
        </InfoUserItemStyle>
        <InfoUserItemStyle>
          <p>Created user: {normalizedDate}</p>
        </InfoUserItemStyle>
        {/* <InfoUserItemStyle>
          <p>
            Added adv:{" "}
            <Link to="/createdadv" onClick={closeModal}>
              {createdAdverts.length}
            </Link>
          </p>
        </InfoUserItemStyle>
        <InfoUserItemStyle>
          <p>
            Added to favorite:{" "}
            <Link to="/favorites" onClick={closeModal}>
              {favorites.length}
            </Link>
          </p>
        </InfoUserItemStyle> */}
      </InfoUserListStyle>
    </ProfileBoxStyle>
  );
}

export default Profile;
