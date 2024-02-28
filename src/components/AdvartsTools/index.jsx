import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  AdvertToolBtnStyle,
  AdvertTools,
  AdvertToolsBtnStyle,
} from "./AdvertsTools.styled";

function AdvertsTools() {
  const [tools, setTools] = useState(false);

  const handleToggleTools = () => {
    setTools((prev) => !prev);
  };
  return (
    <AdvertTools isOpen={tools}>
      {tools ? (
        <>
          <AdvertToolBtnStyle title="Delete ad">
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
