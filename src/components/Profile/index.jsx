import { Link } from "react-router-dom";
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
import { ModalCloseStyle } from "components/Modal/Modal.styled";

function Profile({ closeModal }) {
  // const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const { name, email, avatar, createdAt, createdAdverts, favorites } =
    useSelector(selectProfile);

  const normalizedDate = format(createdAt, "dd-MM-yyyy");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      // setFile(file);
      // setAvatarURL(e.target.files[0]);
      // const blob = new Blob([file]);
      // const objectURL = URL.createObjectURL(blob);
      // console.log(objectURL);
      // setAvatarURL(objectURL);
    }

    if (typeof file != "undefined") {
      dispatch(updateAvatarThunk(file));
    }
  };

  return (
    <ProfileBoxStyle>
      <ModalCloseStyle onClick={closeModal}>
        <svg width={24} height={24}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </ModalCloseStyle>
      <ProfileTitleStyle>Profile</ProfileTitleStyle>
      <ImageBoxStyle>
        {avatar ? (
          <AvatarImageStyle
            src={`https://car-sharing-api.onrender.com/${avatar}`}
            alt="avatar"
          />
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
        <InfoUserItemStyle>
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
        </InfoUserItemStyle>
      </InfoUserListStyle>
    </ProfileBoxStyle>
  );
}

export default Profile;
