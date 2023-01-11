export const settingsBigSlider = {
  dots: true,
  arrows: false,
};

export const settingsSmallSlider = {
  dots: false,
  arrows: true,
  slidesToShow: 3,
};

export const styleBigSlider = {
  ".slick-dots": { top: "93%" },
  ".slick-dots li button:before": {
    fontSize: "10px",
    color: "#FFFF",
    opacity: 1,
  },
};

export const styleSmallSlider = {
  ".slick-slide": { marginRight: "15px" },
  ".slick-prev, .slick-next": { top: "25%" },
  ".slick-prev:before, .slick-next:before": { color: "black" },
  ".slick-prev": { marginLeft: "-20px" },
  ".slick-next": { marginRight: "-20px" },
};
