import React from "react";
import { Footer } from "@common/footer";
import { Header } from "@common/header";
import CartContextWrapper from "@common/contexts/cartContext/index";
import { IMainLayout } from "../interfaces";

const MainLayout: React.FC<IMainLayout> = ({
  children,
  defaultTheme,
  isScrolled,
}) => {
  return (
    <CartContextWrapper>
      <Header
        defaultTheme={defaultTheme}
        isScrolled={isScrolled}
      />
      <main>{children}</main>
      <Footer />
    </CartContextWrapper>
  );
};

export default MainLayout;
