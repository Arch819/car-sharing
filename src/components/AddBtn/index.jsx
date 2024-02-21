import AddIcon from "@mui/icons-material/Add";
import { AddBtnStyle, AddBtnSvgStyle } from "./AddBtn.styled";

function AddBtn({ openModal }) {
  return (
    <div>
      <AddBtnStyle onClick={openModal}>
        <AddIcon style={AddBtnSvgStyle} />
      </AddBtnStyle>
    </div>
  );
}

export default AddBtn;
