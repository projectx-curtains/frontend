import React from "react";
import Link from "next/link";

import { ICategoriesNavBarProps } from "../interfaces";
import StyleLink from "../utils";

import style from "../styles/index.module.scss";

const CategoriesNavBar: React.FC<ICategoriesNavBarProps> = ({ categories }) => {
  return (
    <div className={style["categories"]}>
      <ul className={style["categories__list"]}>
        {categories.map(({ id, name, url }) => (
          <Link
            key={id}
            href={url}>
            <a
              className={style["categories__item"]}
              style={StyleLink(url)}>
              {name}
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesNavBar;
