import { FormikProvider, useFormik } from "formik";

import ColorFilter from "@common/catalog/colorFilter";
import DropdownFilter from "@common/catalog/components/DropdownFilter";
import ItemFilter from "@common/catalog/components/DropdownFilter/components/ItemFilter";
import PriceRangeFilter from "@common/catalog/components/PriceRangeFilter";
import SaveEraseButtons from "@common/catalog/components/SaveEraseButtons";
import TopFilter from "@common/catalog/components/TopFilter";
import {
  fabricsDesignFilter,
  fabricsDropdownFiltersData,
} from "@common/mocks/fabricsFiltersData";

import style from "./styles/index.module.scss";

const FiltersModule = () => {
  const formik = useFormik({
    initialValues: {
      topFilters: [],
      priceRangeFilter: [],
      dropdownFilters: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
    // onReset: (e) => resetForm(),
  });
  return (
    <FormikProvider value={formik}>
      <div className={style["filters-module"]}>
        <TopFilter />
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
        <SaveEraseButtons
          clickSaveButton={formik.handleSubmit}
          clickEraseButton={(e) => formik.resetForm()}
        />
      </div>
    </FormikProvider>
  );
};
export default FiltersModule;
