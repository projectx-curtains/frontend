import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../../LinkButton";
import { ROUTES } from "../../../constants/routes";
import { data } from "./data/data";

const SearchBarPopup = ({ searchInput, setIsActivePopup }) => {
  return (
    <div className="search-popup">
      <div className="container">
        <ul className="search-popup__list">
          {data.items.map(({ img, title }) => (
            <li
              key={title}
              className="search-popup__item"
              onClick={() => {
                setIsActivePopup((isActive) => isActive);
              }}
            >
              <Link to="#" className="search-popup__link">
                <img
                  className="search-popup__img"
                  src={require(`./data/${img}`)}
                  alt={title}
                />
                <div className="search-popup__text-wrapper">
                  <p className="search-popup__heading">{title}</p>
                  <p className="search-popup__subheading">{data.category}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="search-popup__category">
          {data.category}
          <span className="search-popup__category-quantity">
            {data.num} товаров
          </span>
        </p>
        <LinkButton
          className="button--secondary search-popup__button"
          link={ROUTES.catalogue}
          arrowRight={true}
          onClick={() => {
            setIsActivePopup((isActive) => !isActive);
          }}
        >
          <span className="search-popup__button-text">Смотреть все товары</span>
        </LinkButton>
      </div>
    </div>
  );
};

export default SearchBarPopup;
