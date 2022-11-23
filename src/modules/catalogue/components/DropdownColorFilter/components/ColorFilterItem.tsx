import React from "react";
import { useField } from "formik";

import { IColorFilterProps } from "../interfaces";
import style from "../styles/index.module.scss";

const ColorFilterItem: React.FC<IColorFilterProps> = ({ filters }) => {
  const [field] = useField("dropdownFilters");
  return (
    <>
      {filters.map((filter) => (
        <div className={style["item-color-filter"]} key={filter.id}>
          <input
            className={style["item-color-filter__checkbox"]}
            type="checkbox"
            {...field}
            value={filter.title}
            id={filter.id}
          ></input>
          <div
            className={style["item-color-filter__color"]}
            style={{ background: filter.color }}
          ></div>
          <label
            className={style["item-color-filter__name"]}
            htmlFor={filter.id}
          >
            {filter.title}
          </label>
        </div>
      ))}
    </>
  );
};
export default ColorFilterItem;
