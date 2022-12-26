import React, { useState, useEffect } from "react";
import classnames from "classnames";
import debounce from "lodash.debounce";

import { IButtonScrollUpProps } from "../interfaces";
import { scrollToTop } from "../utils/scrollToTop";
import UpArrow from "@assets/svg/UpArrow.svg";
import style from "../styles/buttonScrollUp.module.scss";

const ButtonScrollUp: React.FC<IButtonScrollUpProps> = ({ scrolledValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const DebounceWait = 10;

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > scrolledValue) {
      setIsVisible(true);
    } else if (scrolled <= scrolledValue) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const debounceVal = debounce(toggleVisible, DebounceWait);
    window.addEventListener("scroll", debounceVal);
    return () => window.removeEventListener("scroll", debounceVal);
  });

  return (
    <div
      className={classnames(style["button-scroll-up"], {
        [style["hidden"]]: !isVisible,
      })}>
      <UpArrow onClick={scrollToTop} />
    </div>
  );
};

export default ButtonScrollUp;
