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
  let [countQuality, setCountQuality] = useState(1);
  const onAdd = () => {
    setCountQuality(countQuality++);
  };
  const onReduct = () => {
    countQuality === 1 ? countQuality : setCountQuality(countQuality--);
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
    countQuality,
    onAdd,
    onReduct,
  };

  return <CardProduct {...props} />;
};
export default CardProductContainer;
