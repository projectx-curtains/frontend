import { IPriceFilterProps } from "../interfaces";
import { dropdownValues } from "../mocks/dropdownValues";
import style from "../styles/index.module.scss";

const PriceFilter: React.FC<IPriceFilterProps> = ({ changeTargetValue }) => {
  return (
    <div className={style["priceFilter"]}>
      <select
        className={style["priceFilter__select"]}
        onChange={() => changeTargetValue}>
        {dropdownValues.map(({ id, value, name }) => (
          <option
            key={id}
            className={style["priceFilter__select-item"]}
            value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
