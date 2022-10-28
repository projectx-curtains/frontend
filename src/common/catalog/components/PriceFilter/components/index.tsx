import { IPriceFilterProps } from "../interfaces";
import { dropdownValues } from "../mocks/dropdownValues";

const PriceFilter: React.FC<IPriceFilterProps> = ({ changeTargetValue }) => {
  return (
    <div className="priceFilter">
      <select
        className="priceFilter__select"
        onChange={() => changeTargetValue}
      >
        {dropdownValues.map((dropdownValue) => (
          <option
            key={dropdownValue.id}
            className="priceFilter__select-item"
            value={dropdownValue.value}
          >
            {dropdownValue.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
