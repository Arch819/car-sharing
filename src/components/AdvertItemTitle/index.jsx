import {
  ItemModelTextStyle,
  ItemTitleStyle,
} from "../AdvertItemTitle/AdvertItemTitle.styled";

function AdvertItemTitle({ data: { make, model, year } }) {
  return (
    <ItemTitleStyle>
      <span>{make}</span>
      {model && <ItemModelTextStyle> {model}</ItemModelTextStyle>}
      <span>, {year}</span>
    </ItemTitleStyle>
  );
}

export default AdvertItemTitle;
