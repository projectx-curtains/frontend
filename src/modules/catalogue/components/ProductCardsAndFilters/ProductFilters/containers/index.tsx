import { useFormik } from "formik";
import ProductFilters from "../components";

const ProductFiltersContainer = () => {
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
  return <ProductFilters formik={formik} />;
};
export default ProductFiltersContainer;
