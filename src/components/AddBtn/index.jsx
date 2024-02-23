import AddIcon from "@mui/icons-material/Add";
import { AddBtnStyle, AddBtnSvgStyle } from "./AddBtn.styled";

function AddBtn({ openModal }) {
  return (
    <>
      <AddBtnStyle onClick={openModal}>
        <AddIcon style={AddBtnSvgStyle} />
      </AddBtnStyle>
    </>
  );
}

export default AddBtn;
