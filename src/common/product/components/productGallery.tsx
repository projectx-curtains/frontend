import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Button from "@mui/material/Button";
import ProductCard from "./productCard";
import { ROUTES } from "../../../constants/routes";
import style from "../styles/productGallery.module.scss";

interface Props {
  items: object[]; //Todo: change the type when we'll get json data
  titleText: string;
}

const ProductGallery = ({ items, titleText }: Props) => {
  return (
    <section className={style.gallery}>
      <div className="container">
        <div className={style["gallery-container__header"]}>
          <h2 className="heading">{titleText}</h2>
          <Link href={ROUTES.catalogue}>
            <Button
              className={classNames(
                "button--transparent",
                style["gallery-container__button--mobile"]
              )}
            >
              Все
            </Button>
          </Link>
          <Link href={ROUTES.catalogue}>
            <Button
              className={classNames(
                "button--secondary",
                style["gallery-container__button--desktop"]
              )}
            >
              Смотреть все
            </Button>
          </Link>
        </div>
        <div className={style["gallery-container__content"]}>
          {items.map(({ setName, image, setPrice }) => {
            return (
              <ProductCard
                key={setName}
                image={image}
                name={setName}
                price={setPrice}
                link={"#"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductGallery;
