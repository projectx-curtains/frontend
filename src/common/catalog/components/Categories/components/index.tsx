import React from "react";
import Link from "next/link";

import { ICategoriesProps } from "../interfaces";

const Categories: React.FC<ICategoriesProps> = ({ categories }) => {
  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((category) => (
          <Link key={category.id} href={category.url} style={category.style}>
            <a className="categories__item">{category.name}</a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
