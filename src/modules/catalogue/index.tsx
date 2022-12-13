import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import CategoriesNavBar from "@modules/catalogue/components/CategoriesNavBar";
import PageTitle from "@modules/catalogue/components/PageTitle";
import ProductFilters from "@modules/catalogue/components/productFilters";
import ButtonScrollUp from "@common/buttonScrollUp";
import NothingFound from "./components/NothingFound";

import style from "./styles/index.module.scss";

const CatalogueModule = () => {
  return (
    <>
      <div className={style["fabrics"]}>
        <CustomBreadcrumbs />
        <CategoriesNavBar />
        <PageTitle title="Каталог тканей" />
        <div className={style["wrapper-module"]}>
          <ProductFilters />
          {/* <CardsModule /> */}
          <NothingFound />
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
