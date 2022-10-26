import { useState } from "react";
import PriceRangeFilter from "../components";
import { IPriceRangeFilterContainerProps } from "../interfaces";

const PriceRangeFilterContainer: React.FC<IPriceRangeFilterContainerProps> = ({
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
    <PriceRangeFilter
      minPrice={minPrice}
      maxPrice={maxPrice}
      values={values}
      handleChange={handleChange}
    />
  );
};

export default PriceRangeFilterContainer;
