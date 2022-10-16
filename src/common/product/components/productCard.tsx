import React from "react";
import Link from "next/link";
import Image from "next/future/image";
import style from "../styles/productCard.module.scss";

interface Props {
  image: string;
  name: string;
  price: string;
  link: string;
}

const ProductCard = ({ image, name, price, link }: Props) => {
  return (
    <Link href="#">
      <a className={style.card}>
        {/* <Image className={style.card__img} src={image} alt={name} /> */}
        <p className={style.card__name}>{name}</p>
        <p className={style.card__price}>От {price} BYN</p>
      </a>
    </Link>
  );
};

export default ProductCard;
