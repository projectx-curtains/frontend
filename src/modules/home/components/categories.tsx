import React from "react";
import classNames from "classnames";
import Link from "next/link";

import NorthIcon from "@mui/icons-material/North";

import { CATEGORIES } from "@constants/categories";
import { Category } from "src/types/category.type";
import style from "../styles/categories.module.scss";

function Categories() {
  return (
    <section className={classNames("container", style["catalog-layout"])}>
      {CATEGORIES.map(({ type, name, position, path }: Category) => (
        <Link href={path} key={name}>
          <a
            className={classNames(
              style["category-card"],
              style[`category-card--${type}`],
              style[`catalog-layout__${position}`]
            )}
          >
            <div className={style["category-card__description"]}>
              <h2 className={style["category-card__name"]}>{name}</h2>
              <NorthIcon className={style["category-card__arrow"]} />
            </div>
          </a>
        </Link>
      ))}
    </section>
  );
}

export default Categories;
