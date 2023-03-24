import React from "react";
import { Footer } from "@common/footer";
import { Header } from "@common/header";
import CatalogItemContextWrapper from "@common/contexts/catalogItemContext/index";
import { IMainLayout } from "../interfaces";

const MainLayout: React.FC<IMainLayout> = ({
  children,
  defaultTheme,
  isScrolled,
}) => {
  return (
    <>
      <CatalogItemContextWrapper>
        <Header
          defaultTheme={defaultTheme}
          isScrolled={isScrolled}
        />
        <main>{children}</main>
        <Footer />
      </CatalogItemContextWrapper>
    </>
  );
};

export default MainLayout;
