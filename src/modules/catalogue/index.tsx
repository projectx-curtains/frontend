import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import CategoriesNavBar from "@modules/catalogue/components/CategoriesNavBar";
import PageTitle from "@modules/catalogue/components/PageTitle";
import ProductFilters from "@modules/catalogue/components/ProductCardsAndFilters/ProductFilters";
import CardsModule from "@modules/catalogue/components/ProductCardsAndFilters/ProductCards";
import ButtonScrollUp from "@common/buttonScrollUp";

import style from "./styles/index.module.scss";

const CatalogueModule: React.FC = () => {
  return (
    <>
      <div className={style["fabrics"]}>
        <CustomBreadcrumbs />
        <CategoriesNavBar />
        <PageTitle title="Каталог тканей" />
        <div className={style["wrapper-module"]}>
          <div className={style["product-filters"]}>
            <ProductFilters />
          </div>
          <CardsModule />
        </div>
      </div>
      <ButtonScrollUp
        scrolledValue={750}
        isMobile={false}
      />
    </>
  );
};
export default CatalogueModule;
