import React from "react";
import LinkButton from "../LinkButton";
import Title from "../Title";
import Card from "../Card";
import { ROUTES } from "../../constants/routes";

const ProductGallery = ({ items, titleText }) => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-container__header">
          <Title text={titleText} />
          <LinkButton
            className="button--transparent gallery-container__button--mobile"
            link={ROUTES.catalogue}
            arrowRight={true}
          >
            Все
          </LinkButton>
          <LinkButton
            className="button--secondary gallery-container__button--desktop"
            link={ROUTES.catalogue}
            arrowRight={true}
          >
            Смотреть все
          </LinkButton>
        </div>
        <div className="gallery-container__content">
          {items.map((productItem) => {
            return (
              <Card
                key={productItem.setName}
                image={productItem.image}
                index={productItem.index}
                name={productItem.setName}
                price={productItem.setPrice}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductGallery;
