import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import SuggestionCards from "@modules/catalogue/components/SuggestionCards";
import DescriptionCard from "./components/descriptionCard";
import DetailsAccordion from "./components/DetailsAccordion";
import ImgBox from "./components/ImgBox/components";

import style from "./styles/index.module.scss";

const CardPage: React.FC = () => {
  return (
    <div className={style["card-page"]}>
      <CustomBreadcrumbs />
      <div className={style["wrapper"]}>
        <ImgBox />
        <div className={style["wrapper-description-card"]}>
          <DescriptionCard />
          <DetailsAccordion />
        </div>
      </div>

      <SuggestionCards />
    </div>
  );
};
export default CardPage;
