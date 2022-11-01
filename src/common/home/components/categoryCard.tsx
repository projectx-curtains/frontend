import React from "react";
import classNames from "classnames";
import Link from "next/link";
import NorthIcon from "@mui/icons-material/North";

import { ICategoryCardProps } from "../interfaces";
import style from "../styles/categories.module.scss";

const CategoryCard: React.FC<ICategoryCardProps> = ({
  type,
  text,
  className,
  path,
}) => {
  return (
    <Link href={path}>
      <a
        className={classNames(
          style["category-card"],
          style[`category-card--${type}`],
          style[className]
        )}
      >
        <div className={style["category-card__description"]}>
          <h2 className={style["category-card__name"]}>{text}</h2>
          <NorthIcon className={style["category-card__arrow"]} />
        </div>
      </a>
    </Link>
  );
};

export default CategoryCard;
