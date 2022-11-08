import React from "react";
import { Field } from "formik";

import { IColorFilterProps } from "../interfaces";
import style from "../styles/index.module.scss";

const ItemColorFilter: React.FC<IColorFilterProps> = ({ filters }) => {
  return (
    <>
      {filters.map((filter) => (
        <div className={style["item-color-filter"]} key={filter.id}>
          <Field
            className={style["item-color-filter__checkbox"]}
            type="checkbox"
            name="selectedFilters"
            value={filter.title}
            id={filter.id}
          ></Field>
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
export default ItemColorFilter;
