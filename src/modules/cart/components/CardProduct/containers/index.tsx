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

  const handleRemove = (index: number) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
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
