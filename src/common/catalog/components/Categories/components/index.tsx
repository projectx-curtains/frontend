import React from "react";
import Link from "next/link";

import { ICategoriesProps } from "../interfaces";
import style from "../styles/index.module.scss";

const Categories: React.FC<ICategoriesProps> = ({ categories }) => {
  return (
    <div className={style["categories"]}>
      <ul className={style["categories__list"]}>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.url}
            style={category.style}>
            <a className={style["categories__item"]}>{category.name}</a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
