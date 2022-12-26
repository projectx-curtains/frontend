import CategoriesNavBar from "../components";

import categoriesData from "../mocks/categoriesData";

const CategoriesNavBarContainer: React.FC = () => {
  return <CategoriesNavBar categories={categoriesData} />;
};

export default CategoriesNavBarContainer;
