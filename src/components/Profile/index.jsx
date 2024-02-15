import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import { selectProfile } from "store/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { updateAvatarThunk } from "store/auth/authThunk";

import {
  AvatarSvgStyle,
  IconBtnSvg,
  ImageBoxStyle,
  InfoUserItemStyle,
  InfoUserListStyle,
  ProfileBoxStyle,
  ProfileTitleStyle,
} from "./Profile.styled";
import { Button } from "@mui/material";
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
          <img src={avatar} alt="" />
        ) : (
          <AvatarSvgStyle>
            <use href={`${sprite}#icon-user`}></use>
          </AvatarSvgStyle>
        )}
        <form id="upload-form">
          <input
            type="file"
            id="avatar"
            name="file"
            style={{ display: "none" }}
            onChange={handleAvatarChange}
            accept=".png, .jpg"
          />
          <label htmlFor="avatar">
            <Button>
              <IconBtnSvg>
                <use href={`${sprite}#icon-upload-avatar`}></use>
              </IconBtnSvg>
            </Button>
          </label>
        </form>
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
            Added adv: <Link to="/createdadv">{createdAdverts.length}</Link>
          </p>
        </InfoUserItemStyle>
        <InfoUserItemStyle>
          <p>
            Added to favorite: <Link to="/favorites">{favorites.length}</Link>
          </p>
        </InfoUserItemStyle>
      </InfoUserListStyle>
    </ProfileBoxStyle>
  );
}

export default Profile;
