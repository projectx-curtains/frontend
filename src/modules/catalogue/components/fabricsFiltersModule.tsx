import { FormikProvider, useFormik } from "formik";

import ColorFilter from "@modules/catalogue/components/ColorFilter";
import DropdownFilter from "@modules/catalogue/components/DropdownFilter";
import ItemFilter from "@modules/catalogue/components/DropdownFilter/components/ItemFilter";
import PriceRangeFilter from "@modules/catalogue/components/PriceRangeFilter";
import SaveEraseButtons from "@modules/catalogue/components/SaveEraseButtons";
import SelectedFiltersBar from "@modules/catalogue/components/SelectedFiltersBar";
import {
  fabricsDesignFilter,
  fabricsDropdownFiltersData,
} from "@modules/catalogue/mocks/fabricsFiltersData";

import style from "../styles/fabricsFiltersModule.module.scss";

const FabricsFiltersModule = () => {
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
export default FabricsFiltersModule;
