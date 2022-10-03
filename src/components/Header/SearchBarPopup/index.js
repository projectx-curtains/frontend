import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import { data } from "./data/data";

const SearchBarPopup = ({ searchInput, setIsActivePopup }) => {
  const [list, setList] = useState([]);

  return (
    <div className="search-popup">
      <div className="container">
        <ul className="search-popup__list">
          {data.items.map(({ img, title }, el) => (
            <li
              key={el}
              className="search-popup__item"
              onClick={() => {
                setIsActivePopup((p) => !p);
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
        <Button
          className="button--secondary search-popup__button"
          link="/catalogue"
          arrowRight={true}
          onClick={() => {
            setIsActivePopup((p) => !p);
          }}
        >
          <span className="search-popup__button-text">Смотреть все товары</span>
        </Button>
      </div>
    </div>
  );
};

export default SearchBarPopup;
