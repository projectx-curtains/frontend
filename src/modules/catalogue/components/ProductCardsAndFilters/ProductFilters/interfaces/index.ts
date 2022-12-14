type ProductFilters = {
  initialValues: {
    selectedFiltersBar: [];
    priceRangeFilter: [];
    dropdownFilters: [];
  };
  onSubmit: () => void;
};

export interface IProductFiltersProps {
  formik: ProductFilters;
}
