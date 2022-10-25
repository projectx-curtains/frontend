import { useState } from "react";
import { dropdownValues } from "./mocks/dropdownValues";

const PriceFilter = () => {
  const [sort, setSort] = useState("");

  return (
    <div className="priceFilter">
      <select
        className="priceFilter__select"
        onChange={(e) => setSort(e.target.value)}
      >
        {dropdownValues.map((dropdownValue) => (
          <option
            key={1}
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
