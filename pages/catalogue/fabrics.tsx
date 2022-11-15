import { Footer } from "@common/footer";
import LinkStructure from "@common/catalog/components/LinkStructure";
import Categories from "@common/catalog/components/Categories";
import TitlePage from "@common/catalog/components/TitlePage";
import FabricsFiltersModule from "@modules/catalog/components/fabricsFiltersModule";
import FabricsCardsModule from "@modules/catalog/components/fabricsCardsModule";

import style from "../../styles/fabrics.module.scss";
import ButtonScrollUp from "@common/catalog/components/buttonScrollUp";

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
