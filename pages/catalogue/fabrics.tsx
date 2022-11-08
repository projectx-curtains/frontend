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
import ItemFilter from "@common/catalog/components/DropdownFilter/components/ItemFilter";
import TagCloud from "@common/catalog/components/TagCloud";
import PriceFilter from "@common/catalog/components/PriceFilter";
import TopFilter from "@common/catalog/components/TopFilter";
import { sampleDataTags } from "@common/catalog/components/TagCloud/mocks/sampleDataTags";
import { Formik, Form } from "formik";

const FabricsPage = () => {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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

          {/* -------------- test lib Formik */}
          <Formik
            initialValues={{
              selectedFilters: [],
            }}
            onSubmit={async (values) => {
              await sleep(500);
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {(props) => (
              <Form>
                <TopFilter />
                <div className={style["filters"]}>
                  {fabricsDropdownFiltersData.map((filter) => (
                    <DropdownFilter
                      key={filter.id}
                      title={filter.title}
                      itemsFilter={filter.itemsFilter}
                    >
                      {<ItemFilter filters={filter.itemsFilter} />}
                    </DropdownFilter>
                  ))}
                </div>
                <ColorFilter />
                <div className={style["filter-design"]}>
                  {fabricsDesignFilter.map((filter) => (
                    <DropdownFilter
                      key={filter.id}
                      title={filter.title}
                      itemsFilter={filter.itemsFilter}
                    >
                      {<ItemFilter filters={filter.itemsFilter} />}
                    </DropdownFilter>
                  ))}
                </div>
                <SaveEraseButtons
                  clickSaveButton={props.handleSubmit}
                  clickEraseButton={props.handleReset}
                />
              </Form>
            )}
          </Formik>

          {/* -------------- */}
        </div>
        <div className={style["wrapper__cards"]}>
          <div className={style["wrapper__filter-values"]}>
            <div className={style["wrapper__tag-cloud"]}>
              {sampleDataTags.map((tag) => (
                <TagCloud
                  key={tag.id}
                  name={tag.name}
                  colorTheSquare={tag.colorTheSquare}
                  color={tag.color}
                />
              ))}
            </div>
            <PriceFilter />
          </div>
          <div>cards</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default FabricsPage;
