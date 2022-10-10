import React from "react";
import Button from "../Button";
import Title from "../Title";
import Card from "../Card";
import { ROUTES } from "../../utils/routes";

const ProductGallery = ({ items, titleText }) => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-container__header">
          <Title text={titleText} />
          <Button
            className="button--transparent gallery-container__button--mobile"
            link={ROUTES.catalogue}
            arrowRight={true}
          >
            Все
          </Button>
          <Button
            className="button--secondary gallery-container__button--desktop"
            link={ROUTES.catalogue}
            arrowRight={true}
          >
            Смотреть все
          </Button>
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
