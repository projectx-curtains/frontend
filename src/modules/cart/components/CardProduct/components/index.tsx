import Image from "next/future/image";
import Button from "@mui/material/Button";
// import { useCallback } from "react";
import { WindowInput } from "../fields";
import { sizeImage } from "../../../constants";
import { ICardProductProps } from "../interfaces";
import CartIcon from "@assets/svg/cart-icon.svg";
import srcImage from "../mocks/img-product.png";
import style from "../styles/index.module.scss";
// import { useField } from "formik";

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
  // const [field] = useField(props);

  // const CountQuantity = useCallback(() => {
  // return <p className={style["quantity"]}>{countQuantity}</p>;
  //   return <input type="text" {...field}
  //   {...countQuantity} className={style["quantity"]}></input>
  // }, [countQuantity]);

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
      <h1 className={style["description-product-title"]}>{nameProduct}</h1>
      <p
        className={
          style["description-product-text-size"]
        }>{`Размер - ${widthProduct} см ${heightProduct} см`}</p>
      <p
        className={
          style["description-product-text-material"]
        }>{`Материал - ${materialProduct}`}</p>
      <div className={style["description-product-size-window"]}>
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
      <div className={style["wrapper-button"]}>
        <Button
          className={style["button"]}
          onClick={() => onReduct()}>
          -
        </Button>
        {/* <CountQuantity /> */}
        <input
          type="text"
          // {...field}
          className={style["quantity"]}
          value={countQuantity}
          disabled={true}></input>
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
      <div className={style["wrapper-price-product"]}>
        <p className={style["wrapper-price-product__title"]}>Цена</p>
        <p
          className={
            style["wrapper-price-product__price"]
          }>{`От ${priceProduct} BYN`}</p>
      </div>
    </div>
  );
};
export default CardProduct;
