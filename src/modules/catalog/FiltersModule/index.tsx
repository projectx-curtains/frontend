import { FormikProvider, useFormik } from "formik";

import ColorFilter from "@common/catalog/components/ColorFilter";
import DropdownFilter from "@common/catalog/components/DropdownFilter";
import ItemFilter from "@common/catalog/components/DropdownFilter/components/ItemFilter";
import PriceRangeFilter from "@common/catalog/components/PriceRangeFilter";
import SaveEraseButtons from "@common/catalog/components/SaveEraseButtons";
import SelectedFiltersBar from "@common/catalog/components/SelectedFiltersBar";
import {
  fabricsDesignFilter,
  fabricsDropdownFiltersData,
} from "@common/mocks/fabricsFiltersData";

import style from "./styles/index.module.scss";

const FiltersModule = () => {
  const formik = useFormik({
    initialValues: {
      selectedFiltersBar: [],
      priceRangeFilter: [],
      dropdownFilters: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form>
        <div className={style["filters-module"]}>
          <SelectedFiltersBar />
          <PriceRangeFilter
            minPrice={0}
            maxPrice={500}
            minPriceDifference={5}
            minPriceOnTheScreen={5}
            maxPriceOnTheScreen={250}
          />
          <div className={style["filters-module__filters"]}>
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
          <div className={style["filters-module__filter-design"]}>
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
          <SaveEraseButtons />
        </div>
      </form>
    </FormikProvider>
  );
};
export default FiltersModule;
