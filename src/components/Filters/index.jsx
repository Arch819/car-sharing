import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _debounce from "lodash.debounce";
import Select from "react-select";
import { handleUpdateFilters } from "store/adverts/advertsSlice";
import { getFilterAdvertsThunk } from "store/adverts/advertsThunk";
import { selectFilter } from "store/adverts/selectors";
import { modelList } from "utils/modelList";
import priceList from "utils/priceList";
import {
  FormLabelStyle,
  FormLabelTextStyle,
  FormMileageBoxStyle,
  FormMileageLabelStyle,
  FormTextAboveInputStyle,
  FormaBtn,
  FormaStyle,
  MileageInputStyle,
  SelectPriceStyle,
} from "./Filters.styled";

function Filters() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const [brand, setBrand] = useState(filter.make);
  const [price, setPrice] = useState(filter.rentalPrice);
  const [mileageFrom, setMileageFrom] = useState(filter.mileageFrom);
  const [mileageTo, setMileageTo] = useState(filter.mileageTo);
  const [fieldChange, setFieldChange] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const filterChange = {
      make: brand,
      rentalPrice: price,
      mileageFrom,
      mileageTo,
    };
    dispatch(getFilterAdvertsThunk(filterChange));
    dispatch(handleUpdateFilters(filterChange));
    setFieldChange(false);
  };

  const handleBrandChange = ({ value }) => {
    if (filter.make !== value) {
      setBrand(value);
      setFieldChange(true);
    }
    return;
  };
  const handlePriceChange = ({ value }) => {
    if (filter.rentalPrice !== value) {
      setPrice(value);
      setFieldChange(true);
    }
    return;
  };
  const handleMileageChange = _debounce(({ target }) => {
    const { name, value } = target;
    if (name === "from") {
      setMileageFrom(value);
      setFieldChange(true);
    }
    if (name === "to") {
      setMileageTo(value);
      setFieldChange(true);
    }
  }, 300);

  return (
    <FormaStyle onSubmit={handleFormSubmit}>
      <FormLabelStyle>
        <FormLabelTextStyle>Car brand</FormLabelTextStyle>
        <Select
          defaultValue={modelList.find((item) => item.label === brand)}
          styles={SelectPriceStyle("224px")}
          options={modelList}
          onChange={handleBrandChange}
          aria-label="Select a car brand"
          placeholder="Enter the text"
        />
      </FormLabelStyle>
      <FormLabelStyle>
        <FormLabelTextStyle>Price/ 1 hour</FormLabelTextStyle>
        <FormTextAboveInputStyle>To</FormTextAboveInputStyle>
        <Select
          className="price"
          defaultValue={priceList.find((item) => item.label === price)}
          styles={SelectPriceStyle("125px ")}
          options={priceList}
          onChange={handlePriceChange}
          aria-label="Select a rental price"
          placeholder={""}
        />
      </FormLabelStyle>
      <FormLabelStyle>
        <FormLabelTextStyle>Сar mileage / km</FormLabelTextStyle>
        <FormMileageBoxStyle>
          <FormMileageLabelStyle>
            <FormTextAboveInputStyle>From</FormTextAboveInputStyle>
            <MileageInputStyle
              type="text"
              className="from"
              name="from"
              defaultValue={mileageFrom}
              onChange={handleMileageChange}
            />
          </FormMileageLabelStyle>
          <FormMileageLabelStyle>
            <FormTextAboveInputStyle>To</FormTextAboveInputStyle>
            <MileageInputStyle
              type="text"
              className="to"
              name="to"
              defaultValue={mileageTo}
              onChange={handleMileageChange}
            />
          </FormMileageLabelStyle>
        </FormMileageBoxStyle>
      </FormLabelStyle>
      <FormaBtn className="btn" type="submit" disabled={!fieldChange}>
        Search
      </FormaBtn>
    </FormaStyle>
  );
}

export default Filters;
