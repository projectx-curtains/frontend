import LinkStructure from "@modules/catalogue/components/LinkStructure";
import Categories from "@modules/catalogue/components/Categories";
import TitlePage from "@modules/catalogue/components/TitlePage";
import ProductFilters from "@modules/catalogue/components/productFilters";
import CardsModule from "@modules/catalogue/components/ProductCards";
import ButtonScrollUp from "@common/buttonScrollUp";

import style from "./styles/index.module.scss";

const CatalogueModule = () => {
  return (
    <>
      <div className={style["fabrics"]}>
        <LinkStructure currentTitle="Каталог тканей" />
        <Categories />
        <TitlePage title="Каталог тканей" />
        <div className={style["wrapper-module"]}>
          <div className={style["product-filters"]}>
            <ProductFilters />
          </div>
          <CardsModule />
        </div>
      </div>
      <ButtonScrollUp scrolledValue={750} isMobile={false} />
    </>
  );
};
export default CatalogueModule;
