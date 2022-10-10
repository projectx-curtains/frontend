import React from "react";
import LinkButton from "../../../components/LinkButton";
import Carousel from "../../../components/Carousel";
import CarouselItem from "../../../components/Carousel/CarouselItem";
import Title from "../../../components/Title";
import { ROUTES } from "../../../utils/routes";
import { CarouselSlider_mockData } from "../../../assets/data/carouselSlider_mockData";
import { app_mockData } from "../../../assets/data/app_mockData";

const OurWork = () => {
  return (
    <section className="our-work" id="our-works">
      <Title text="Наши работы" />
      <Carousel>
        {CarouselSlider_mockData.map((sliderItem, sliderIndex, sliderArr) => {
          return (
            <div key={sliderIndex} className="work-content">
              <div className="description-container">
                <div className="description-container__description">
                  {app_mockData.ourWork.descriptionText}
                </div>
                <LinkButton
                  className="description-container__button"
                  link={ROUTES.consultation}
                >
                  Консультация
                </LinkButton>
                <CarouselItem
                  currentIndex={sliderIndex + 1}
                  length={sliderArr.length}
                />
              </div>
              <img src={sliderItem.image} alt="our work" />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};
export default OurWork;
