import React, { useState, useEffect } from "react";
import classNames from "classnames";
import debounce from "lodash.debounce";

import { IButtonScrollUpProps } from "../interfaces";
import { scrollToTop } from "../utils/scrollToTop";
import UpArrow from "@assets/svg/UpArrow.svg";
import style from "../styles/buttonScrollUp.module.scss";

const ButtonScrollUp: React.FC<IButtonScrollUpProps> = ({
  scrolledValue,
  isMobile,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const DebounceWait = 10;

  useEffect(() => {
    const debounceVal = debounce(toggleVisible, DebounceWait);
    window.addEventListener("scroll", debounceVal);
    return () => window.removeEventListener("scroll", debounceVal);
  });

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > scrolledValue) {
      setIsVisible(true);
    } else if (scrolled <= scrolledValue) {
      setIsVisible(false);
    }
  };

  return (
    <div
      className={classNames(
        style["button-scroll-up"],
        {
          [style["hidden"]]: !isVisible,
        },
        {
          [style["only-mobile"]]: isMobile,
        }
      )}
    >
      <UpArrow onClick={scrollToTop} />
    </div>
  );
};

export default ButtonScrollUp;
