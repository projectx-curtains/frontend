import React from "react";
import Image from "next/future/image";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import { IMGS_DATA } from "../mocks";
import style from "../styles/index.module.scss";

const MobileSlider: React.FC = () => {
  return (
    <Box
      className={style["mobile-wrapper-img"]}
      sx={{
        ".slick-track": {
          display: "flex",
          flexDirection: "row",
        },
      }}>
      <Slider
        centerMode={true}
        infinite={false}
        arrows={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}>
        {IMGS_DATA.map((img) => {
          return (
            <div
              key={img.id}
              className={style["mobile-wrapper-img__wrapper-img"]}>
              <Image
                key={img.id}
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
    </Box>
  );
};

export default MobileSlider;
