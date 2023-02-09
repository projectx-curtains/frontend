import Image from "next/future/image";
import Button from "@mui/material/Button";
import { useCallback } from "react";
import { WindowInput } from "../fields";
import { sizeImage } from "../../../constants";
import { ICardProductProps } from "../interfaces";
import CartIcon from "@assets/svg/cart-icon.svg";
import srcImage from "../mocks/img-product.png";
import style from "../styles/index.module.scss";

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
    <div className={style["card-product"]}>
      <p className={style["list-cards-empty"]}>.</p>
      <p className={style["list-cards-description-product"]}>Товар</p>
      <p className={style["list-cards-quantity-product"]}>Количество</p>
      <p className={style["list-cards-price-product"]}>Цена</p>
      <div className={style["image"]}>
        <Image
          src={srcImage}
          alt="img product"
          width={sizeImage.width}
          height={sizeImage.height}
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
              <WindowInput name="widthWindow" />
            </div>
            <div className={style["wrapper-inputs__height-window"]}>
              <p className={style["text"]}>Высота, см</p>
              <WindowInput name="heightWindow" />
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
        <CartIcon
          className={style["delete-button-mobile"]}
          onClick={() => {
            handleRemove;
          }}
        />
      </div>
      <p className={style["price-product"]}>{`От ${priceProduct} BYN`}</p>
    </div>
  );
};
export default CardProduct;
