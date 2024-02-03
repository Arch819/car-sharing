import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { handleUpdateFilters } from "store/adverts/advertsSlice";
import { getFilterAdvertsThunk } from "store/adverts/advertsThunk";
import { selectFilter } from "store/adverts/selectors";
import { modelList } from "utils/modelList";
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
import priceList from "utils/priceList";

function Filters() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const [brand, setBrand] = useState(filter.make);
  const [price, setPrice] = useState(filter.rentalPrice);

  const handleFormSubmit = (e) => {
    console.log("click");
    e.preventDefault();
    const filterChange = {
      make: brand,
      rentalPrice: price,
    };
    dispatch(getFilterAdvertsThunk(filterChange));
    dispatch(handleUpdateFilters(filterChange));
  };

  const handleBrandChange = ({ value }) => {
    if (filter.make !== value) {
      setBrand(value);
    }
    return;
  };
  const handlePriceChange = ({ value }) => {
    if (filter.rentalPrice !== value) {
      setPrice(value);
    }
    return;
  };

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
          formatOptionLabel={(option) => option.label}
          placeholder={""}
        />
      </FormLabelStyle>
      <FormLabelStyle>
        <FormLabelTextStyle>Сar mileage / km</FormLabelTextStyle>
        <FormMileageBoxStyle>
          <FormMileageLabelStyle>
            <FormTextAboveInputStyle>From</FormTextAboveInputStyle>
            <MileageInputStyle type="text" className="from" />
          </FormMileageLabelStyle>
          <FormMileageLabelStyle>
            <FormTextAboveInputStyle>To</FormTextAboveInputStyle>
            <MileageInputStyle type="text" className="to" />
          </FormMileageLabelStyle>
        </FormMileageBoxStyle>
      </FormLabelStyle>
      <FormaBtn className="btn" type="submit">
        Search
      </FormaBtn>
    </FormaStyle>
  );
}

export default Filters;
