import Image from "next/future/image";
import Button from "@mui/material/Button";
import { useCallback } from "react";
import { InputWindow } from "../fields";
import CartContextWrapper from "@common/contexts/cartContext/components/cartContextWrapper";
import { ICardProductProps } from "../interfaces";
import srcImage from "../mocks/img-product.png";
import style from "../styles/index.module.scss";
// import Context from "./context";

const CardProduct: React.FC<ICardProductProps> = ({
  nameProduct,
  materialProduct,
  widthProduct,
  heightProduct,
  priceProduct,
  handleRemove,
  countQuantity,
  onAdd,
  onReduct,
}) => {
  const CountQuantity = useCallback(() => {
    return <p className={style["quantity"]}>{countQuantity}</p>;
  }, [countQuantity]);

  return (
    // <Context.Provider
    //   value={{ countQuantity: countQuantity, priceProduct: priceProduct }}>
    <CartContextWrapper>
      <div className={style["card-product"]}>
        <div className={style["image"]}>
          <Image
            src={srcImage}
            alt="img product"
            width={127}
            height={171}
          />
        </div>
        <div className={style["description-product"]}>
          <h1 className={style["description-product__title"]}>{nameProduct}</h1>
          <p
            className={
              style["description-product__text"]
            }>{`Размер - ${widthProduct} см ${heightProduct} см`}</p>
          <p
            className={
              style["description-product__text"]
            }>{`Материал - ${materialProduct}`}</p>
          <div className={style["description-product__size-window"]}>
            <p className={style["title"]}>Размеры окна</p>
            <div className={style["wrapper-inputs"]}>
              <div className={style["wrapper-inputs__width-window"]}>
                <p className={style["text"]}>Ширина, см</p>
                <InputWindow name="widthWindow" />
              </div>
              <div className={style["wrapper-inputs__height-window"]}>
                <p className={style["text"]}>Высота, см</p>
                <InputWindow name="heightWindow" />
              </div>
            </div>
          </div>
        </div>
        <div className={style["quantity-product"]}>
          <div className={style["wrapper-button"]}>
            <Button
              className={style["button"]}
              onClick={() => onReduct()}>
              -
            </Button>
            <CountQuantity />
            <Button
              className={style["button"]}
              onClick={() => onAdd()}>
              +
            </Button>
          </div>
          <p
            className={style["delete-button"]}
            onClick={() => {
              handleRemove;
            }}>
            Удалить
          </p>
        </div>
        <p className={style["price-product"]}>{`От ${priceProduct} BYN`}</p>
      </div>
    </CartContextWrapper>
    // </Context.Provider>
  );
};
export default CardProduct;
