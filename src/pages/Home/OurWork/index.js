import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../../../components/Button";
import Carousel from "../../../components/Carousel";
import CarouselItem from "../../../components/Carousel/CarouselItem";
import Title from "../../../components/Title";
import { CarouselSlider_mockData } from "../../../assets/data/carouselSlider_mockData";
import { app_mockData } from "../../../assets/data/app_mockData";

const OurWork = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <section className="our-work">
      <Title text="Наши работы" />
      <Carousel>
        {CarouselSlider_mockData.map((e, i, arr) => {
          return (
            <div key={i} className="work-content">
              <div className="description-container">
                <div className="description-container__description">
                  {app_mockData.ourWork.descriptionText}
                </div>
                <Button
                  className={`button--${
                    isTabletOrMobile ? "secondary" : "primary"
                  } `}
                  link="/consultation"
                >
                  Консультация
                </Button>
                <CarouselItem currentIndex={i + 1} length={arr.length} />
              </div>
              <img src={e.image} alt="our work" />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};
export default OurWork;
