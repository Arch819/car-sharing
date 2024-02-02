import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { handleUpdateFilters } from "store/adverts/advertsSlice";
import { getFilterAdvertsThunk } from "store/adverts/advertsThunk";
import { selectFilter } from "store/adverts/selectors";
import { modelList } from "utils/modelList";
import { priceList } from "utils/priceList";
const price = priceList();

function Filters() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  useEffect(() => {
    if (filter.make || filter.rentalPrice || filter.mileage) {
      dispatch(getFilterAdvertsThunk(filter));
    }
  }, [dispatch, filter]);

  const handleBrandChange = ({ value }) => {
    if (filter.make !== value) {
      dispatch(handleUpdateFilters({ make: value }));
    }
    return;
  };
  const handlePriceChange = ({ value }) => {
    if (filter.rentalPrice !== value) {
      dispatch(handleUpdateFilters({ rentalPrice: value }));
    }
    return;
  };

  return (
    <div>
      <form>
        <label>
          <span>Car brand</span>
          <Select
            defaultValue={modelList.find((item) => item.label === filter.make)}
            options={modelList}
            onChange={handleBrandChange}
            aria-label="Select a car brand"
            placeholder="Enter the text"
          />
        </label>
        <label>
          <span>Price/ 1 hour</span>
          <Select
            defaultValue={price.find(
              (item) => item.label === filter.rentalPrice
            )}
            options={price}
            onChange={handlePriceChange}
            placeholder="To $"
          />
        </label>
        <label>
          <span>Сar mileage / km</span>
          <label>
            <span>From</span>
            <input type="text" />
          </label>
          <label>
            <span>To</span>
            <input type="text" />
          </label>
        </label>
      </form>
      <button>Search</button>
    </div>
  );
}

export default Filters;
