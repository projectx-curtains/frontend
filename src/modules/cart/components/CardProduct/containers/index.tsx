import React, { useState } from "react";
import CardProduct from "../components";
import { ICardProductContainerProps } from "../interfaces";

const CardProductContainer: React.FC<ICardProductContainerProps> = ({
  nameProduct,
  materialProduct,
  widthProduct,
  heightProduct,
  priceProduct,
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
    onAdd,
    onReduct,
  };

  return <CardProduct {...props} />;
};
export default CardProductContainer;
