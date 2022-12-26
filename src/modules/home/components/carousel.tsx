import React from "react";
import classnames from "classnames";
import Slider from "react-slick";

import { ICarouselProps } from "../interfaces";
import { carouselSettings } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC<ICarouselProps> = ({ children, className }) => {
  return (
    <div className={classnames("slider", className)}>
      <Slider {...carouselSettings}>{children}</Slider>
    </div>
  );
};
export default Carousel;
