import React, { useEffect, useState, useContext } from "react";
import Header from "../components";
import { catalogItemContext } from "@common/contexts/catalogItemContext/components";
import { IHeaderContainerProps } from "../interfaces";
import { HEADER_THEME } from "../constants";

const HeaderContainer: React.FC<IHeaderContainerProps> = ({
  defaultTheme,
  isScrolled,
}) => {
  const colorSwitchPosition = 10;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState(defaultTheme);

  const choiceProduct = useContext(catalogItemContext);
  const isChoiceProduct = choiceProduct.catalogItemContextValue;

  const menuToggleHandler = () => {
    setIsMenuOpen(!isMenuOpen);
    if (window.scrollY < colorSwitchPosition) {
      const currentTheme = isMenuOpen ? defaultTheme : HEADER_THEME.white;
      setHeaderTheme(currentTheme);
    }
  };

  const pageScrollHandler = () => {
    const currentTheme =
      window.scrollY > colorSwitchPosition ? HEADER_THEME.white : defaultTheme;
    setHeaderTheme(currentTheme);
  };

  useEffect(() => {
    if (isScrolled) {
      window.addEventListener("scroll", pageScrollHandler);
    }
  });

  return (
    <Header
      isMenuOpen={isMenuOpen}
      headerTheme={headerTheme}
      menuToggleHandler={menuToggleHandler}
      isChoiceProduct={isChoiceProduct}
    />
  );
};

export default HeaderContainer;
