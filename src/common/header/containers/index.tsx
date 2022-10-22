import React, { useEffect, useState } from "react";
import { HEADER_THEME } from "../constants";
import Header from "../components";

const HeaderContainer = () => {
  const colorSwitchPosition = 10;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState(HEADER_THEME.transparent);

  const menuToggleHandler = () => {
    setIsMenuOpen((isOpen) => !isOpen);
    if (window.scrollY < colorSwitchPosition) {
      const currentTheme = isMenuOpen
        ? HEADER_THEME.transparent
        : HEADER_THEME.white;
      setHeaderTheme(currentTheme);
    }
  };

  const pageScrollHandler = () => {
    const currentTheme =
      window.scrollY > colorSwitchPosition
        ? HEADER_THEME.white
        : HEADER_THEME.transparent;
    setHeaderTheme(currentTheme);
  };

  useEffect(() => {
    window.addEventListener("scroll", pageScrollHandler);
  });

  return (
    <Header
      isMenuOpen={isMenuOpen}
      headerTheme={headerTheme}
      menuToggleHandler={menuToggleHandler}
    />
  );
};

export default HeaderContainer;
