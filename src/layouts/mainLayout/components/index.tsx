import React from "react";
import { Footer } from "@common/footer";
import { Header } from "@common/header";
import { IMainLayout } from "../interfaces";

const MainLayout: React.FC<IMainLayout> = ({
  children,
  defaultTheme,
  isScrolled,
}) => {
  return (
    <>
      <Header
        defaultTheme={defaultTheme}
        isScrolled={isScrolled}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
