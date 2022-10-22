import type { NextPage } from "next";
import MainLayout from "../../src/layouts/mainLayout";
import HeadData from "../../src/seo/headData";
import Banner from "../../src/common/home/components/banner";
import Categories from "../../src/common/home/components/categories";
import ProductGallery from "../../src/common/productGallery/components";
import WhyWeAre from "../../src/common/home/components/whyWeAre";
import ButtonScrollUp from "../../src/common/buttonScrollUp/components";
import OurWork from "../../src/common/home/components/ourWork";
import Reviews from "../../src/common/home/components/reviews";

import { NewProduct_mockData } from "../../assets/data/newProduct_mockData";

const SCROLLED_VALUE = 1450;

const Home: NextPage = () => {
  return (
    <>
      <HeadData />
      <MainLayout>
        <Banner />
        <Categories />
        <ProductGallery titleText="Новинки" items={NewProduct_mockData} />
        <ProductGallery titleText="Популярное" items={NewProduct_mockData} />
        <OurWork />
        <WhyWeAre />
        <Reviews />
        <ButtonScrollUp scrolledValue={SCROLLED_VALUE} />
      </MainLayout>
    </>
  );
};

export default Home;
