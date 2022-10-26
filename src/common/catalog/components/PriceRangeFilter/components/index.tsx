import { Slider } from "@mui/material";
import { IPriceRangeFilterProps } from "../interfaces";

const PriceRangeFilter: React.FC<IPriceRangeFilterProps> = ({
  minPrice,
  maxPrice,
  values,
  handleChange,
}) => {
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
