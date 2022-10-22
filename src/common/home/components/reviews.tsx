import React from "react";
import classNames from "classnames";
import Image from "next/future/image";
import Carousel from "./carousel";
import { REVIEWS } from "../constants/reviews.data";
import style from "../styles/reviews.module.scss";

const Reviews = () => {
  return (
    <section className={style.reviews}>
      <div className={style.reviews__container}>
        <h2 className={classNames("heading", style.reviews__heading)}>
          Отзывы
        </h2>
        <Carousel className={style.reviews__slider}>
          {REVIEWS.map((sliderItem, sliderIndex, sliderArr) => {
            return (
              <div key={sliderIndex} className={style["reviews-content"]}>
                <div className={style["image-container"]}>
                  <Image
                    className={style["image"]}
                    src={require(`../../../../assets/img/Reviews/${sliderItem.image}`)}
                    alt="our work"
                  />
                  <div
                    className={classNames(style.user, style["user--mobile"])}
                  >
                    <div className={style.user__name}>{sliderItem.name}</div>
                    <div className={style.user__location}>
                      {sliderItem.location}
                    </div>
                  </div>
                </div>
                <div className={style["description-container"]}>
                  <div className={style["description"]}>
                    <div className={style["description__icon"]}></div>
                    <div className={style["index-slide"]}>
                      <div className={style["index-slide-wrapper"]}>
                        <div
                          className={
                            style["index-slide-wrapper__current-slide"]
                          }
                        >
                          0{sliderIndex + 1}/
                        </div>
                        <div
                          className={
                            style["index-slide-wrapper__slides-length"]
                          }
                        >
                          0{sliderArr.length}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={classNames(style.user, style["user--desktop"])}
                  >
                    <div className={style.user__name}>{sliderItem.name}</div>
                    <div className={style.user__location}>
                      {sliderItem.location}
                    </div>
                  </div>
                  <div className={style.description__text}>
                    {sliderItem.comment}
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};
export default Reviews;
