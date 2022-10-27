import React from "react";

import { ICategoriesProps } from "../interfaces";

const Categories: React.FC<ICategoriesProps> = ({ categories }) => {
  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((category) => {
          return (
            <a
              className="categories__item"
              key={category.id}
              href={category.url}
              style={category.style}
            >
              {category.name}
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
