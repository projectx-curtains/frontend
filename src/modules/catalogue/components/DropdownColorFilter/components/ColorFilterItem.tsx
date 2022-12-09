import React from "react";
import { useField } from "formik";

import { IColorFilterProps } from "../interfaces";
import style from "../styles/index.module.scss";

const ColorFilterItem: React.FC<IColorFilterProps> = ({ filters }) => {
  const [field] = useField("dropdownFilters");
  return (
    <>
      {filters.map(({ id, color, title }) => (
        <div className={style["item-color-filter"]} key={id}>
          <input
            className={style["item-color-filter__checkbox"]}
            type="checkbox"
            {...field}
            value={title}
            id={id}
          ></input>
          <div
            className={style["item-color-filter__color"]}
            style={{ background: color }}
          ></div>
          <label className={style["item-color-filter__name"]} htmlFor={id}>
            {title}
          </label>
        </div>
      ))}
    </>
  );
};
export default ColorFilterItem;
