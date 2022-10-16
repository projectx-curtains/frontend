import React from "react";
import Link from "next/link";
import Image from "next/future/image";
import classNames from "classnames";
import { CATALOGUE } from "../../../constants/catalogue";
import style from "../styles/header.module.scss";

const CataloguePopup = () => {
  return (
    <div className={style["catalog-popup"]}>
      <ul className={classNames("container", style["catalog-popup__list"])}>
        {CATALOGUE.map(
          ({ name, path }, catalogueItem) =>
            catalogueItem !== CATALOGUE.length - 1 && (
              <li className={style["catalog-popup__item"]}>
                <Link href={path}>
                  <>
                    <Image
                      key={name}
                      src={require(`../../../../assets/img/CatalogCategories/${name}.png`)}
                      alt={name}
                      className={style["catalog-popup__img"]}
                    />
                    <p className={style["catalog-popup__name"]}>{name}</p>
                  </>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default CataloguePopup;
