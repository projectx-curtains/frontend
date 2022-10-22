import React from "react";
import Link from "next/link";
import Image from "next/future/image";
import style from "../styles/productCard.module.scss";
import { IProductCardProps } from "../interfaces";

const ProductCard: React.FC<IProductCardProps> = ({
  image,
  name,
  price,
  link,
}) => {
  return (
    <Link href="#">
      <a className={style.card}>
        <Image
          className={style.card__img}
          src={image}
          alt={name}
          width={408}
          height={466}
        />
        <p className={style.card__name}>{name}</p>
        <p className={style.card__price}>От {price} BYN</p>
      </a>
    </Link>
  );
};

export default ProductCard;
