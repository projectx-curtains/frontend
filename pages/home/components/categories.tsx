import React from "react";
import classNames from "classnames";
import CategoryCard from "./categoryCard";
import { CATALOGUE } from "../../../src/constants/catalogue";
import style from "../styles/categories.module.scss";

function Categories() {
  return (
    <section className={classNames("container", style["catalog-layout"])}>
      {CATALOGUE.map(({ type, name, position, path }) => (
        <CategoryCard
          key={name}
          path={path}
          type={type}
          text={name}
          className={`catalog-layout__${position}`}
        />
      ))}
    </section>
  );
}

export default Categories;
