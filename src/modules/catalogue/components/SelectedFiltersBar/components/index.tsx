import React from "react";
import { useField } from "formik";

import { TopFiltersData } from "../mocks/sampleTopFiltersData";

import style from "../styles/index.module.scss";

const SelectedFiltersBar = () => {
  const [field] = useField("selectedFiltersBar");
  return (
    <div className={style["selected-filters-bar"]}>
      {TopFiltersData.map(({ title, icon }, index) => {
        const filterKey = `${index + title}`;
        return (
          <div className={style["item-filter"]} key={filterKey}>
            <input
              className={style["item-filter__checkbox"]}
              id={filterKey}
              type="checkbox"
              {...field}
              value={title}
            ></input>
            <label className={style["item-filter__name"]} htmlFor={filterKey}>
              {title}
            </label>
            <div className={style["item-filter__icon"]}>{icon()}</div>
          </div>
        );
      })}
    </div>
  );
};
export default SelectedFiltersBar;
