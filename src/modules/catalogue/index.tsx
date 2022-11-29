import { useEffect, useState } from "react";
import LinkStructure from "@modules/catalogue/components/LinkStructure";
import Categories from "@modules/catalogue/components/Categories";
import TitlePage from "@modules/catalogue/components/TitlePage";
import ProductFilters from "@modules/catalogue/components/productFilters";
import CardsModule from "@modules/catalogue/components/productCards";
import ButtonScrollUp from "@common/buttonScrollUp";
import NothingFound from "./components/NothingFound";
import MobileModule from "./components/MobileModule";

import style from "./styles/index.module.scss";

const CatalogueModule = () => {
  // const getWindowSize = () => {
  //   const { innerWidth } = window;
  //   return { innerWidth };
  // };
  // const [windowSize, setWindowSize] = useState(getWindowSize());
  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize(getWindowSize());
  //   };
  //   window.addEventListener("resize", handleWindowResize);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  //----------------
  const isMobile = true; //здесь прописать условие true при определенной ширине экрана
  // const [isMobile, setIsMobile] = useState(false);
  // if (windowSize.innerWidth < 1200) {
  //   setIsMobile(true);
  // }
  return (
    <>
      <div className={style["fabrics"]}>
        <LinkStructure currentTitle="Каталог тканей" />
        <Categories />
        {/* {isMobile ? (
          <MobileModule className={style["mobile-module"]} />
        ) : (
          <>
            <TitlePage title="Каталог тканей" />
            <div className={style["wrapper-module"]}>
              <ProductFilters />
              <CardsModule />
              <NothingFound />
            </div>
          </>
        )} */}
        <div className={style["mobile-module"]}>
          <MobileModule />
        </div>

        <div className={style["web-module"]}>
          <TitlePage title="Каталог тканей" />
          <div className={style["wrapper-module"]}>
            <ProductFilters />
            <CardsModule />
            {/* <NothingFound /> */}
          </div>
        </div>
      </div>
      <ButtonScrollUp scrolledValue={750} isMobile={false} />
    </>
  );
};
export default CatalogueModule;
