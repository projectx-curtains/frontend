import LinkStructure from "@modules/catalogue/components/LinkStructure";
import Categories from "@modules/catalogue/components/Categories";
import TitlePage from "@modules/catalogue/components/TitlePage";
import ProductFilters from "@modules/catalogue/components/productFilters";
import CardsModule from "@modules/catalogue/components/productCards";

import style from "./styles/index.module.scss";
import ButtonScrollUp from "@modules/catalogue/components/buttonScrollUp";

const CatalogueModule = () => {
  return (
    <>
      <div className={style["fabrics"]}>
        <LinkStructure currentTitle="Каталог тканей" />
        <Categories />
        <TitlePage title="Каталог тканей" />
        <div className={style["wrapper-module"]}>
          <ProductFilters />
          <CardsModule />
        </div>
      </div>
      <ButtonScrollUp scrolledValue={3} />
    </>
  );
};
export default CatalogueModule;
