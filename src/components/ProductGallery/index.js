import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../Button";
import Title from "../Title";
import Card from "../Card";

const ProductGallery = ({ items, titleText }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-container__header">
          <Title text={titleText} />
          {isTabletOrMobile ? (
            <Button
              className="button--transparent"
              link="/catalogue"
              arrowRight={true}
            >
              Все
            </Button>
          ) : (
            <Button
              className="button--secondary"
              link="/catalogue"
              arrowRight={true}
            >
              Смотреть все
            </Button>
          )}
        </div>
        <div className="gallery-container__content">
          {items.map((item, i) => {
            return (
              <Card
                key={i}
                image={item.image}
                index={item.index}
                name={item.setName}
                price={item.setPrice}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductGallery;
