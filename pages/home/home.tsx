import type { NextPage } from "next";
import MainLayout from "../../src/layouts/mainLayout";
import HeadData from "../../src/seo/headData";
import Banner from "./components/banner";
import Categories from "./components/categories";
import ProductGallery from "../../src/common/product/components/productGallery";
import { NewProduct_mockData } from "../../assets/data/newProduct_mockData";

const Home: NextPage = () => {
  return (
    <>
      <HeadData />
      <MainLayout>
        <Banner />
        <Categories />
        <ProductGallery titleText="Новинки" items={NewProduct_mockData} />
        <ProductGallery titleText="Популярное" items={NewProduct_mockData} />
      </MainLayout>
    </>
  );
};

export default Home;
