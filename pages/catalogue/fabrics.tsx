import { Footer } from "@common/footer";
import LinkStructure from "@common/catalog/components/LinkStructure";
import Categories from "@common/catalog/components/Categories";
import TitlePage from "@common/catalog/components/TitlePage";
import FiltersModule from "@modules/catalog/FiltersModule";
import CardsModule from "@modules/catalog/CardsModule";

import style from "../../styles/fabrics.module.scss";

const FabricsPage = () => {
  return (
    <>
      <div className={style["fabrics"]}>
        <LinkStructure currentTitle="Каталог тканей" />
        <Categories />
        <TitlePage title="Каталог тканей" />
        <div className={style["wrapper-module"]}>
          <FiltersModule />
          <CardsModule />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default FabricsPage;
