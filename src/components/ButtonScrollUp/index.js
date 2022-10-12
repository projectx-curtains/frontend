import React, { useState, useEffect } from "react";
import classNames from "classnames";
import debounce from "lodash.debounce";
import { scrollToTop } from "../../utils/utils";

const ButtonScrollUp = ({ scrolledValue }) => {
  const [visible, setVisible] = useState(false);
  const waitDebounce = 10;

  useEffect(() => {
    const debounceVal = debounce(toggleVisible, waitDebounce);
    window.addEventListener("scroll", debounceVal);
    return () => window.removeEventListener("scroll", debounceVal);
  });

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > scrolledValue) {
      setVisible(true);
    } else if (scrolled <= scrolledValue) {
      setVisible(false);
    }
  };

  return (
    <div className={classNames("button-scroll-up", { hidden: visible })}>
      <img
        src={require("../../assets/svg/UpArrow.svg").default}
        alt="button-up"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ButtonScrollUp;
