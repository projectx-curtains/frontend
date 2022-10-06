import React from "react";
import CategoryCard from "./CategoryCard";
import { CATALOGUE } from "../../../assets/data/catalogue";

function Categories() {
  return (
    <section className="container catalog-layout">
      {CATALOGUE.map(({ type, name, position, path }) => (
        <CategoryCard
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
