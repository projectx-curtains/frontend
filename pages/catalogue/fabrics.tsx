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
import { useState } from "react";
import ProductCard from "@common/productCard/components";

const FabricsPage = () => {
  // const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const [selectedFilters, setSelectedFilters] = useState();

  return (
    <>
      <div className={style["fabrics"]}>
        <LinkStructure currentTitle="Каталог тканей" />
        <Categories />
        <TitlePage title="Каталог тканей" />
        <div className={style["wrapper"]}>
          <Formik
            initialValues={{
              topFilters: [],
              dropdownFilters: [],
            }}
            // onSubmit={async (values) => {
            //   await sleep(500);
            //   alert(JSON.stringify(values, null, 2));
            // }}
            onSubmit={(values) => {
              setSelectedFilters(values);
              console.log(selectedFilters);
            }}
          >
            {(props) => (
              <Form>
                <div className={style["wrapper__filters"]}>
                  <TopFilter />
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
                </div>
              </Form>
            )}
          </Formik>

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

            <div className={style["cards"]}>
              <ProductCard
                image="/#"
                name="Test Card"
                price={100}
                link="link"
                variant="categories"
              />
              <ProductCard
                image="/#"
                name="Test Card"
                price={100}
                link="link"
                variant="categories"
              />
              <ProductCard
                image="/#"
                name="Test Card"
                price={100}
                link="link"
                variant="categories"
              />
              <ProductCard
                image="/#"
                name="Test Card"
                price={100}
                link="link"
                variant="categories"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default FabricsPage;
