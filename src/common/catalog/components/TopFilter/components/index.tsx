import React from "react";
import { Field } from "formik";
import TopFilter_new from "@assets/svg/topFilter_new.svg";
import TopFilter_sale from "@assets/svg/topFilter_sale.svg";
import TopFilter_top from "@assets/svg/topFilter_top.svg";

import style from "../styles/index.module.scss";

const TopFilter = () => {
  return (
    <div className={style["top-filter"]}>
      <div className={style["item-filter"]}>
        <Field
          className={style["item-filter__checkbox"]}
          id="1"
          type="checkbox"
          name="topFilters"
          value="Новинки"
        ></Field>
        <label className={style["item-filter__name"]} htmlFor="1">
          Новинки
        </label>
        <TopFilter_new className={style["item-filter__icon"]} />
      </div>
      <div className={style["item-filter"]}>
        <Field
          className={style["item-filter__checkbox"]}
          id="2"
          type="checkbox"
          name="topFilters"
          value="Распродажа"
        ></Field>
        <label className={style["item-filter__name"]} htmlFor="2">
          Распродажа
        </label>
        <TopFilter_sale className={style["item-filter__icon"]} />
      </div>
      <div className={style["item-filter"]}>
        <Field
          className={style["item-filter__checkbox"]}
          id="3"
          type="checkbox"
          name="topFilters"
          value="Популярное"
        ></Field>
        <label className={style["item-filter__name"]} htmlFor="3">
          Популярное
        </label>
        <TopFilter_top className={style["item-filter__icon"]} />
      </div>
    </div>
  );
};
export default TopFilter;
