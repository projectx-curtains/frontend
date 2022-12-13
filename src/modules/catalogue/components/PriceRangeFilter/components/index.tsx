import { Slider } from "@mui/material";

import { IPriceRangeFilterProps } from "../interfaces";

import style from "../styles/index.module.scss";

const PriceRangeFilter: React.FC<IPriceRangeFilterProps> = ({
  field,
  minPrice,
  maxPrice,
  priceValues,
  handleChange,
}) => {
  return (
    <div className={style["price-range-filter"]}>
      <span className={style["price-range-filter__title"]}>Стоимость</span>
      <div className={style["price-range-filter__wrapper"]}>
        <Slider
          {...field}
          min={minPrice}
          max={maxPrice}
          value={priceValues}
          onChange={handleChange}
        />
        <span
          className={
            style["price-range-filter__price-block"]
          }>{`Цена: ${priceValues[0]} BYN - ${priceValues[1]} BYN`}</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
