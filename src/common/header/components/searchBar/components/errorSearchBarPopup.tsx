import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import ProductCard from "@common/productCard/components";
import SearchIcon from "@mui/icons-material/Search";

import { IErrorSearchBarPopupProps } from "../interfaces";
import { ProductCardType } from "@common/productCard/types";
import { ROUTES } from "@constants/routes";
import { ProductCardStyle } from "@common/productCard/constants";
import style from "../styles/searchBar.module.scss";
import { NewProduct_mockData } from "@assets/data/newProduct_mockData";

const ErrorSearchBarPopup: React.FC<IErrorSearchBarPopupProps> = ({
  setIsActivePopup,
}) => {
  return (
    <div className={style["search-popup"]}>
      <div className="container">
        <div className={style["search-popup__error"]}>
          <div className={style["error__text-wrapper"]}>
            <SearchIcon className={style["error__icon"]} />
            <p className={style["error__text"]}>
              У нас нет таких товаров, попробуйте изменить условия поиска
            </p>
          </div>
          <ul className={style["error__advices"]}>
            <li className={style["error__advice"]}>
              • Проверьте все ли слова написаны правильно.
            </li>
            <li className={style["error__advice"]}>
              • Попробуйте изменить поисковый запрос.
            </li>
            <li className={style["error__advice"]}>
              • Сделайте выбор категории товаров в пункте меню <b>Каталог</b>.
            </li>
            <li className={style["error__advice"]}>
              • Перейдите по кнопке Смотреть все товары.
            </li>
          </ul>
          <Link href={ROUTES.catalogue}>
            <Button
              className="button--primary"
              onClick={() => {
                setIsActivePopup((isActive) => !isActive);
              }}>
              Смотреть все товары
            </Button>
          </Link>
        </div>
        <div className={style["search-popup__product-offer"]}>
          <p className={style["product-offer__headline"]}>
            Вам будет интересно
          </p>
          <div className={style["product-offer__content"]}>
            {NewProduct_mockData.map(
              ({ name, image, price, link }: ProductCardType) => {
                return (
                  <ProductCard
                    key={name}
                    image={image}
                    name={name}
                    price={price}
                    link={link}
                    variant={ProductCardStyle.searchPopup}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorSearchBarPopup;
