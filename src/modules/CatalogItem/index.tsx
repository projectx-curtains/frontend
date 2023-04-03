import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import SuggestionCards from "@modules/catalogue/components/SuggestionCards";
import CatalogItemDescription from "./components/CatalogItemDescription";
import CustomBreadcrumbsCatalogItemMob from "./components/CustomBreadcrumbsCatalogItemMob";
import DetailsAccordion from "./components/DetailsAccordion";
import PreviewSlider from "./components/PreviewSlider";

import style from "./styles/index.module.scss";

const CatalogItem: React.FC = () => {
  return (
    <div className={style["catalog-item"]}>
      <div className={style["custom-breadcrumbs"]}>
        <CustomBreadcrumbs />
      </div>
      <CustomBreadcrumbsCatalogItemMob />
      <div className={style["wrapper"]}>
        <PreviewSlider />
        <div className={style["wrapper-description-card"]}>
          <CatalogItemDescription />
          <DetailsAccordion />
        </div>
      </div>
      <div className={style["suggestion-cards"]}>
        <SuggestionCards />
      </div>
    </div>
  );
};
export default CatalogItem;
