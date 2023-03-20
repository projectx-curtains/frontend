import React from "react";
import Image from "next/future/image";
import Slider from "react-slick";
import { IMGS_DATA } from "../mocks";
import style from "../styles/index.module.scss";

const MobileSlider: React.FC = () => {
  return (
    <div className={style["mobile-wrapper-img"]}>
      <Slider
        speed={500}
        // rows={1}
        // slidesPerRow={1}
        // infinite={true}
        centerMode={true}
        slidesToShow={1}
        slidesToScroll={1}>
        {IMGS_DATA.map((img) => {
          return (
            <div
              key={img.id}
              className={style["mobile-wrapper-img__wrapper-img"]}>
              <Image
                key={img.id}
                // className={style["wrapper-img__img"]}
                src={require(`@assets/img/ConsultationPage/${img.image}`)}
                alt="curtains"
                width={img.widthMobile}
                height={img.heightMobile}
              />
              <p className={style["mobile-wrapper-img__text-img"]}>
                {img.text}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MobileSlider;
