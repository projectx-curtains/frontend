import { useRouter } from "next/router";

import Categories from "../components";

import StyleLink from "../utils";

import categoriesData from "../mocks/categoriesData";

const CategoriesContainer = () => {
  const router = useRouter();

  const categories = categoriesData.map((category) => ({
    style: StyleLink(router.asPath, category.url),
    ...category,
  }));

  return <Categories categories={categories} />;
};

export default CategoriesContainer;
