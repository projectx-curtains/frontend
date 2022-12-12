import React from "react"
import classnames from "classnames"
import Link from "next/link"
import Image from "next/future/image"
import { IProductCardProps } from "../interfaces"
import style from "../styles/productCard.module.scss"

const ProductCard: React.FC<IProductCardProps> = ({
  image,
  name,
  price,
  variant,
}) => {
  return (
    <Link href="#">
      <a className={classnames(style.card, style[`card--${variant}`])}>
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
  )
}

export default ProductCard
