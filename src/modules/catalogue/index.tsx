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
  return (
    <>
      <div className={style["fabrics"]}>
        <LinkStructure currentTitle="Каталог тканей" />
        <Categories />

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
