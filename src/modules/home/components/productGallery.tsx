import React from "react";
import classnames from "classnames";
import Link from "next/link";
import ProductCard from "../../../common/productCard/components";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { IProductGalleryProps } from "../interfaces";
import { ProductCardType } from "@common/productCard/types";

import { ProductCardStyle } from "@common/productCard/constants";
import { ROUTES } from "@constants/routes";
import style from "../styles/productGallery.module.scss";

const ProductGallery: React.FC<IProductGalleryProps> = ({
  items,
  titleText,
}) => {
  return (
    <section className={style.gallery}>
      <div className="container">
        <div className={style["gallery-container__header"]}>
          <h2 className="heading">{titleText}</h2>
          <Link href={ROUTES.catalogue}>
            <Button
              className={classnames(
                "button--transparent",
                style["gallery-container__button--mobile"]
              )}>
              Все
              <KeyboardArrowRightIcon
                className={classnames(
                  "button__icon",
                  style["gallery-container__button__icon"]
                )}
              />
            </Button>
          </Link>
          <Link href={ROUTES.catalogue}>
            <Button
              className={classnames(
                "button--secondary",
                style["gallery-container__button--desktop"]
              )}>
              Смотреть все
              <KeyboardArrowRightIcon
                className={classnames(
                  "button__icon",
                  style["gallery-container__button__icon"]
                )}
              />
            </Button>
          </Link>
        </div>
        <div className={style["gallery-container__content"]}>
          {items.map(({ name, image, price, link }: ProductCardType) => {
            return (
              <ProductCard
                key={name}
                image={image}
                name={name}
                price={price}
                link={link}
                variant={ProductCardStyle.homepage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductGallery;
