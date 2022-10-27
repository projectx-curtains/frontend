import React from "react";

import { IColorFilterProps } from "../interfaces";

const ItemColorFilter: React.FC<IColorFilterProps> = ({ filters }) => {
  return (
    <>
      {filters.map((filter) => (
        <div className="item-color-filter" key={filter.id}>
          <input
            className="item-color-filter__checkbox"
            type="checkbox"
            id={filter.id}
          ></input>
          <div
            className="item-color-filter__color"
            style={{ background: filter.color }}
          ></div>
          <label className="item-color-filter__name" htmlFor={filter.id}>
            {filter.title}
          </label>
        </div>
      ))}
    </>
  );
};
export default ItemColorFilter;
