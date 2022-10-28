import { Slider } from "@mui/material";
import { IPriceRangeFilterProps } from "../interfaces";

const PriceRangeFilter: React.FC<IPriceRangeFilterProps> = ({
  minPrice,
  maxPrice,
  priceValues,
  handleChange,
}) => {
  return (
    <div className="price-range-filter">
      <span className="price-range-filter__title">Стоимость</span>
      <div className="price-range-filter__wrapper">
        <Slider
          min={minPrice}
          max={maxPrice}
          value={priceValues}
          onChange={handleChange}
        />
        <span className="price-range-filter__price-block">{`Цена: ${priceValues[0]} BYN - ${priceValues[1]} BYN`}</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
