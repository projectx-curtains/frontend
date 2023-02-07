import React, { useState } from "react";
import { ICardProductContainerProps } from "../interfaces";

import CardProduct from "../components";

const CardProductContainer: React.FC<ICardProductContainerProps> = ({
  nameProduct,
  materialProduct,
  widthProduct,
  heightProduct,
  priceProduct,
  countQuantity,
  onAdd,
  onReduct,
}) => {
  const [cards, setCards] = useState([]);

  const handleRemove = (id: number) => {
    const newCards = [...cards];
    newCards.filter((index) => id === index);
    setCards(newCards);
  };

  const props = {
    nameProduct,
    materialProduct,
    widthProduct,
    heightProduct,
    priceProduct,
    handleRemove,
    countQuantity,
    onAdd,
    onReduct,
  };

  return <CardProduct {...props} />;
};
export default CardProductContainer;
