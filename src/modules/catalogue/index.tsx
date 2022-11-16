import { Footer } from "@common/footer";
import LinkStructure from "@modules/catalogue/components/LinkStructure";
import Categories from "@modules/catalogue/components/Categories";
import TitlePage from "@modules/catalogue/components/TitlePage";
import FabricsFiltersModule from "@modules/catalogue/components/fabricsFiltersModule";
import FabricsCardsModule from "@modules/catalogue/components/fabricsCardsModule";

import style from "./styles/index.module.scss";
import ButtonScrollUp from "@modules/catalogue/components/buttonScrollUp";

const FabricsPage = () => {
  return (
    <>
      <div className={style["fabrics"]}>
        <LinkStructure currentTitle="Каталог тканей" />
        <Categories />
        <TitlePage title="Каталог тканей" />
        <div className={style["wrapper-module"]}>
          <FabricsFiltersModule />
          <FabricsCardsModule />
        </div>
      </div>
      <ButtonScrollUp scrolledValue={3} />
      <Footer />
    </>
  );
};
export default FabricsPage;
