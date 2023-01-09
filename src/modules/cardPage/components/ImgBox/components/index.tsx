import Image from "next/future/image";
import ImgCardPage from "@assets/img/CardPage/ImgCardPage.png";
import ImgCardPageSmall from "@assets/img/CardPage/ImgCardPageSmall.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "../styles/index.module.scss";

const ImgBox: React.FC = () => {
  const settingsBig = {
    dots: true,
    arrows: false,
  };
  const settingsSmall = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    className: "inSlider",
  };
  return (
    <div className={style["img-Box"]}>
      <Slider
        {...settingsBig}
        className={style["big-Slider"]}>
        <Image
          src={ImgCardPage}
          alt="img card"
          width={564}
          height={482}
        />
        <Image
          src={ImgCardPage}
          alt="img card"
          width={564}
          height={482}
        />
      </Slider>
      <Slider
        {...settingsSmall}
        className={style["small-Slider"]}>
        <Image
          src={ImgCardPageSmall}
          alt="img card"
          width={156}
          height={146}
        />
        <Image
          src={ImgCardPageSmall}
          alt="img card"
          width={156}
          height={146}
        />
        <Image
          src={ImgCardPageSmall}
          alt="img card"
          width={156}
          height={146}
        />
        <Image
          src={ImgCardPageSmall}
          alt="img card"
          width={156}
          height={146}
        />
      </Slider>
    </div>
  );
};
export default ImgBox;
