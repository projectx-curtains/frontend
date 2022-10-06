import React from "react";
import { Link } from "react-router-dom";
import { MdNorth } from "react-icons/md";

const CategoryCard = ({ type, text, className, path }) => {
  return (
    <Link
      to={path}
      className={`category-card category-card--${type} ${className}`}
    >
      <div className={`category-card__description`}>
        <h2 className={`category-card__name`}>{`${text}`}</h2>
        <MdNorth className={`category-card__arrow`}></MdNorth>
      </div>
    </Link>
  );
};

export default CategoryCard;
