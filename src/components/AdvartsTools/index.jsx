import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { notiflixConfirm } from "utils/notiflixMessages";
import { useDispatch } from "react-redux";
import { deleteAdvertThunk } from "store/adverts/advertsThunk";
import {
  AdvertToolBtnStyle,
  AdvertTools,
  AdvertToolsBtnStyle,
} from "./AdvertsTools.styled";

function AdvertsTools({ idAdvert }) {
  const [tools, setTools] = useState(false);
  const dispatch = useDispatch();

  const handleToggleTools = () => {
    setTools((prev) => !prev);
  };

  const handleDeleteAd = async () => {
    try {
      await notiflixConfirm("delete");
      dispatch(deleteAdvertThunk(idAdvert));
    } catch (error) {
      return;
    }
  };
  return (
    <AdvertTools isOpen={tools}>
      {tools ? (
        <>
          <AdvertToolBtnStyle onClick={handleDeleteAd} title="Delete ad">
            <DeleteIcon color="error" />
          </AdvertToolBtnStyle>
          <AdvertToolBtnStyle title="Block display">
            <VisibilityOffIcon color="warning" />
          </AdvertToolBtnStyle>
          <AdvertToolBtnStyle title="Close tools" onClick={handleToggleTools}>
            <KeyboardArrowUpIcon />
          </AdvertToolBtnStyle>
        </>
      ) : (
        <AdvertToolsBtnStyle onClick={handleToggleTools}>
          <MoreHorizIcon />
        </AdvertToolsBtnStyle>
      )}
    </AdvertTools>
  );
}

export default AdvertsTools;
