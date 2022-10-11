import React from "react";
import Carousel from "../../../components/Carousel";
import CarouselItem from "../../../components/Carousel/CarouselItem";
import Title from "../../../components/Title";
import { CarouselSlider_mockData } from "../../../assets/data/carouselSlider_mockData";
import { app_mockData } from "../../../assets/data/app_mockData";

const Reviews = () => {
  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="reviews">
      <Title text="Отзывы" />
      <Carousel>
        {CarouselSlider_mockData.map((sliderItem, sliderIndex, sliderArr) => {
          return (
            <div key={sliderIndex} className="reviews-content">
              <div className="image-container">
                <img className="image" src={sliderItem.image} alt="our work" />
                <div className="user user--mobile">
                  <div className="user__name">{app_mockData.reviews.user}</div>
                  <div className="user__location">
                    {app_mockData.reviews.location}
                  </div>
                </div>
              </div>
              <div className="description-container">
                <div className="description">
                  <img
                    src={
                      require("../../../assets/svg/format_quote.svg").default
                    }
                    alt="review"
                  />
                  <CarouselItem
                    currentIndex={sliderIndex + 1}
                    length={sliderArr.length}
                  />
                </div>
                <div className="user user--desktop">
                  <div className="user__name">{app_mockData.reviews.user}</div>
                  <div className="user__location">
                    {app_mockData.reviews.location}
                  </div>
                </div>
                <div className="description__text">
                  {app_mockData.reviews.descriptionText}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="button-scroll-up">
        <img
          src={require("../../../assets/svg/UpArrow.svg").default}
          alt="button-up"
          onClick={handlerScrollUp}
        />
      </div>
    </section>
  );
};
export default Reviews;
