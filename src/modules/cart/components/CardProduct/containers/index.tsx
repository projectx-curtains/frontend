import React, { useState } from "react";
import { ICardProductContainerProps } from "../interfaces";

import CardProduct from "../components";

const CardProductContainer: React.FC<ICardProductContainerProps> = ({
  nameProduct,
  materialProduct,
  widthProduct,
  heightProduct,
  priceProduct,
}) => {
  let [countQuantity, setCountQuantity] = useState(1);
  const onAdd = () => {
    setCountQuantity(countQuantity++);
  };
  const onReduct = () => {
    countQuantity === 1 ? countQuantity : setCountQuantity(countQuantity--);
  };

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
