import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { MdNorth } from "react-icons/md";
import style from "../styles/categories.module.scss";

interface Props {
  type: string;
  text: string;
  className: string;
  path: string;
}

const CategoryCard = ({ type, text, className, path }: Props) => {
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
          <MdNorth className={style["category-card__arrow"]}></MdNorth>
        </div>
      </a>
    </Link>
  );
};

export default CategoryCard;
