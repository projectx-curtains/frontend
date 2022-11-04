import { Footer } from "@common/footer";
import LinkStructure from "@common/catalog/components/LinkStructure";
import Categories from "@common/catalog/components/Categories";
import TitlePage from "@common/catalog/components/TitlePage";
import DropdownFilter from "@common/catalog/components/DropdownFilter";

import style from "../../styles/fabrics.module.scss";
import PriceRangeFilter from "@common/catalog/components/PriceRangeFilter";
import {
  fabricsDesignFilter,
  fabricsDropdownFiltersData,
} from "@common/mocks/fabricsFiltersData";
import ColorFilter from "@common/catalog/colorFilter";
import SaveEraseButtons from "@common/catalog/components/SaveEraseButtons";

const FabricsPage = () => {
  return (
    <>
      <LinkStructure currentTitle="Каталог тканей" />
      <Categories />
      <TitlePage title="Каталог тканей" />
      <div className={style["wrapper"]}>
        <div className={style["wrapper__filters"]}>
          <PriceRangeFilter
            minPrice={0}
            maxPrice={500}
            minPriceDifference={5}
            minPriceOnTheScreen={5}
            maxPriceOnTheScreen={250}
          />
          <div className={style["filters"]}>
            {fabricsDropdownFiltersData.map((filter) => (
              <DropdownFilter
                key={filter.id}
                title={filter.title}
                itemsFilter={filter.itemsFilter}
              />
            ))}
          </div>
          <ColorFilter />
          <div className={style["filter-design"]}>
            {fabricsDesignFilter.map((filter) => (
              <DropdownFilter
                key={filter.id}
                title={filter.title}
                itemsFilter={filter.itemsFilter}
              />
            ))}
          </div>
          <SaveEraseButtons />
        </div>
        <div className={style["wrapper__cards"]}></div>
      </div>
      <Footer />
    </>
  );
};
export default FabricsPage;
