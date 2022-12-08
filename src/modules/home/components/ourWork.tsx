import React from "react";
import classnames from "classnames";
import Image from "next/future/image";
import Button from "@mui/material/Button";
import Carousel from "../../../common/carousel/components/carousel";
import { ROUTES } from "@constants/routes";
import { CarouselSlider_mockData } from "@assets/data/carouselSlider_mockData";
import { app_mockData } from "@assets/data/app_mockData";
import style from "../styles/ourWork.module.scss";

const OurWork = () => {
  return (
    <section className={style["our-work"]} id="our-works">
      <div className={classnames("container", style["our-work__container"])}>
        <h2 className={classnames("heading", style["our-work__heading"])}>
          Наши работы
        </h2>
        <Carousel className={style["our-work__slider"]}>
          {CarouselSlider_mockData.map((sliderItem, sliderIndex, sliderArr) => {
            return (
              <div key={sliderIndex} className={style["work-content"]}>
                <div className={style["description-container"]}>
                  <div className={style["description-container__description"]}>
                    {app_mockData.ourWork.descriptionText}
                  </div>
                  <Button
                    className={style["description-container__button"]}
                    href={ROUTES.consultation}
                  >
                    Консультация
                  </Button>
                  <div className={style["index-slide"]}>
                    <div className={style["index-slide-wrapper"]}>
                      <div
                        className={style["index-slide-wrapper__current-slide"]}
                      >
                        0{sliderIndex + 1}/
                      </div>
                      <div
                        className={style["index-slide-wrapper__slides-length"]}
                      >
                        0{sliderArr.length}
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={sliderItem.image}
                  alt="our work"
                  width={650}
                  height={490}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};
export default OurWork;
