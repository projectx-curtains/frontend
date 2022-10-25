import { useState } from "react";
import { Slider } from "@mui/material";
import { IPriceRangeFilterProps } from "./interfaces";

const PriceRangeFilter: React.FC<IPriceRangeFilterProps> = ({
  minPrice,
  maxPrice,
  minPriceDifference,
  minPriceOnTheScreen,
  maxPriceOnTheScreen,
}) => {
  const [values, setValues] = useState([
    minPriceOnTheScreen,
    maxPriceOnTheScreen,
  ]);

  const handleChange = (
    event: React.ChangeEvent,
    newValue: number,
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValues([
        Math.min(newValue[0], values[1] - minPriceDifference),
        values[1],
      ]);
    } else {
      setValues([
        values[0],
        Math.max(newValue[1], values[0] + minPriceDifference),
      ]);
    }
  };

  return (
    <div className="price-range-filter">
      <span className="price-range-filter__title">Стоимость</span>
      <div className="price-range-filter__wrapper">
        <Slider
          min={minPrice}
          max={maxPrice}
          value={values}
          onChange={handleChange}
        />
        <span className="price-range-filter__price-block">{`Цена: ${values[0]} BYN - ${values[1]} BYN`}</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
