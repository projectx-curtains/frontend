import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, index, name, price, link }) => {
  return (
    <Link to="#" className="card">
      <img className="card__img" src={image} alt={name} />
      <p className="card__name">{`${index} ${name}`}</p>
      <p className="card__price">От {price} BYN</p>
    </Link>
  );
};

export default Card;
