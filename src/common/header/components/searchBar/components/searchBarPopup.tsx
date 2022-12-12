import React from "react"
import classnames from "classnames"

import Link from "next/link"
import Image from "next/future/image"
import Button from "@mui/material/Button"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

import { ISearchBarPopupProps } from "../interfaces"
import { ROUTES } from "@constants/routes"
import { data } from "../mock/data"
import style from "../styles/searchBar.module.scss"

const SearchBarPopup: React.FC<ISearchBarPopupProps> = ({
  setIsActivePopup,
}) => {
  return (
    <div className={style["search-popup"]}>
      <div className="container">
        <ul className={style["search-popup__list"]}>
          {data.items.map(({ img, title }) => (
            <li
              key={title}
              className={style["search-popup__item"]}
              onClick={() => {
                setIsActivePopup((isActive) => !isActive)
              }}>
              <Link href="/">
                <div className={style["search-popup__link"]}>
                  <Image
                    className={style["search-popup__img"]}
                    src={require(`../mock/${img}`)}
                    alt={title}
                  />
                  <div className={style["search-popup__text-wrapper"]}>
                    <p className={style["search-popup__heading"]}>{title}</p>
                    <p className={style["search-popup__subheading"]}>
                      {data.category}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className={style["search-popup__category"]}>
          {data.category}
          <span className={style["search-popup__category-quantity"]}>
            {data.num} товаров
          </span>
        </p>
        <Link href={ROUTES.catalogue}>
          <Button
            className={classnames(
              "button--secondary",
              style["search-popup__button"]
            )}
            onClick={() => {
              setIsActivePopup((isActive) => !isActive)
            }}>
            <span className={style["search-popup__button-text"]}>
              Смотреть все товары
            </span>
            <KeyboardArrowRightIcon className="button__icon" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SearchBarPopup
