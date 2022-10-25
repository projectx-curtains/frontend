import React from "react";
import Image from "next/future/image";
import { WHY_WE_ARE } from "../constants/whyWeAre.data";
import { WhyWeAreItem } from "../types";
import style from "../styles/whyWeAre.module.scss";

const WhyWeAre = () => {
  return (
    <section className={style["why-we-are"]}>
      <div className="container">
        <h2 className="heading">Почему мы</h2>
        <div className={style["why-we-are__content"]}>
          {WHY_WE_ARE.map(({ image, text }: WhyWeAreItem) => {
            return (
              <div key={text} className={style["why-we-are-item"]}>
                <div className={style["why-we-are-item__image"]}>
                  <Image
                    className={style["why-we-are-item__icon"]}
                    src={require(`@assets/img/WhyWeAre/${image}`)}
                    alt={text}
                    width={80}
                    height={80}
                  />
                </div>
                <div className={style["why-we-are-item__text"]}>{text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyWeAre;
