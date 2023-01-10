import Image from "next/future/image";
import Slider from "react-slick";
import Box from "@mui/material/Box";

import ImgCardPageSmall from "@assets/img/CardPage/ImgCardPageSmall.png";
import {
  settingsBigSlider,
  settingsSmallSlider,
  styleBigSlider,
  styleSmallSlider,
} from "../moks/settingsSliders";
import { sampleImgBig } from "../moks/sampleImg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "../styles/index.module.scss";

const ImgBox: React.FC = () => {
  return (
    <div className={style["wrapper-sliders"]}>
      <div className={style["wrapper-sliders__big-slider"]}>
        <Box sx={styleBigSlider}>
          <Slider {...settingsBigSlider}>
            {sampleImgBig.map((ImgCardPage, index) => {
              return (
                <Image
                  key={index}
                  src={ImgCardPage}
                  alt="img card"
                  width={564}
                  height={482}
                />
              );
            })}
          </Slider>
        </Box>
      </div>
      <div className={style["wrapper-sliders__small-slider"]}>
        <Box sx={styleSmallSlider}>
          <Slider {...settingsSmallSlider}>
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
        </Box>
      </div>
    </div>
  );
};
export default ImgBox;
