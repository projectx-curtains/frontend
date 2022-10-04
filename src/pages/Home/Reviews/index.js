import React from "react";
import { useMediaQuery } from "react-responsive";
import Carousel from "../../../components/Carousel";
import CarouselItem from "../../../components/Carousel/CarouselItem";
import Title from "../../../components/Title";
import { CarouselSlider_mockData } from "../../../assets/data/carouselSlider_mockData";
import { app_mockData } from "../../../assets/data/app_mockData";

const Reviews = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

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
        {CarouselSlider_mockData.map((e, i, arr) => {
          return (
            <div key={i} className="reviews-content">
              <div className="image-container">
                <img
                  className="image"
                  src={e.image}
                  alt="our work"
                  width="650px"
                  height="513px"
                />
                {isTabletOrMobile && (
                  <div className="user">
                    <div className="user__name">
                      {app_mockData.reviews.user}
                    </div>
                    <div className="user__location">
                      {app_mockData.reviews.location}
                    </div>
                  </div>
                )}
              </div>
              <div className="description-container">
                <div className="description">
                  <img
                    src={
                      require("../../../assets/svg/format_quote.svg").default
                    }
                    alt="review"
                  />
                  <CarouselItem currentIndex={i + 1} length={arr.length} />
                </div>
                {!isTabletOrMobile && (
                  <div className="user">
                    <div className="user__name">
                      {app_mockData.reviews.user}
                    </div>
                    <div className="user__location">
                      {app_mockData.reviews.location}
                    </div>
                  </div>
                )}
                <div className="description__text">
                  {app_mockData.reviews.descriptionText}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      {isTabletOrMobile && (
        <div className="button-scroll-up">
          <img
            src={require("../../../assets/svg/UpArrow.svg").default}
            alt="button-up"
            onClick={handlerScrollUp}
          />
        </div>
      )}
    </section>
  );
};
export default Reviews;
