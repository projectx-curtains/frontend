import React, { useState } from "react";
import { useFormik } from "formik";
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

  const formik = useFormik({
    initialValues: {
      widthWindow: [],
      heightWindow: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
    formik,
  };

  return <CardProduct {...props} />;
};
export default CardProductContainer;
