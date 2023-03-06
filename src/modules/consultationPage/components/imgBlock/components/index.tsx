import React from "react";
import Image from "next/future/image";
import { TITLES_PAGE_SECTIONS } from "@modules/consultationPage/constants";
import { IMGS_DATA } from "../mocks";
import style from "../styles/index.module.scss";

const ImgBlock: React.FC = () => {
  return (
    <div
      id="сhoosingСurtains"
      className={style["img-block"]}>
      <h1 className={style["img-block__title"]}>
        {TITLES_PAGE_SECTIONS.сhoosingСurtains}
      </h1>
      <p className={style["img-block__subtitle"]}>
        Должны ли шторы касаться пола, какие шторы подойдут в маленькую комнату,
        а какие помогут скрыть недостатки помещения и сделают уютной большую?
      </p>
      <div className={style["img-block__wrapper-imgs"]}>
        {IMGS_DATA.map((img) => {
          return (
            <div
              key={img.id}
              className={style["wrapper-img"]}>
              <Image
                className={style["wrapper-img__img"]}
                src={require(`@assets/img/ConsultationPage/${img.image}`)}
                alt="curtains"
                width={img.width}
                height={img.height}
              />
              <p className={style["wrapper-img__text"]}>{img.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImgBlock;
