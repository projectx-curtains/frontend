import React from "react";

import { IColorFilterProps } from "./interfaces";

const ItemColorFilter: React.FC<IColorFilterProps> = ({ itemFilterData }) => {
  return (
    <>
      {itemFilterData.map((filterСolor) => (
        <div className="item-color-filter" key={filterСolor.id}>
          <input
            className="item-color-filter__checkbox"
            type="checkbox"
            id={filterСolor.id}
          ></input>
          <div
            className="item-color-filter__color"
            style={{ background: filterСolor.color }}
          ></div>
          <label className="item-color-filter__name" htmlFor={filterСolor.id}>
            {filterСolor.nameFilter}
          </label>
        </div>
      ))}
    </>
  );
};
export default ItemColorFilter;
