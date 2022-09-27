import React from "react";
import CategoryCard from "./CategoryCard";
import { catalogueData } from "../../../assets/data/catalogue";

function Categories() {
  return (
    <section className="container catalog-layout">
      {catalogueData.map(({ type, name, position }) => (
        <CategoryCard
          type={type}
          text={name}
          className={`catalog-layout__${position}`}
        />
      ))}
    </section>
  );
}

export default Categories;
