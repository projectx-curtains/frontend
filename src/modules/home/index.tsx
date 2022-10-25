import Banner from "@common/home/components/banner";
import Categories from "@common/home/components/categories";
import ProductGallery from "@common/productGallery/components";
import WhyWeAre from "@common/home/components/whyWeAre";
import ButtonScrollUp from "@common/buttonScrollUp/components";
import OurWork from "@common/home/components/ourWork";
import Reviews from "@common/home/components/reviews";

import { SCROLLED_VALUE } from "./constants";

import { NewProduct_mockData } from "@assets/data/newProduct_mockData";

const HomeModule = () => {
  return (
    <>
      <Banner />
      <Categories />
      <ProductGallery titleText="Новинки" items={NewProduct_mockData} />
      <ProductGallery titleText="Популярное" items={NewProduct_mockData} />
      <OurWork />
      <WhyWeAre />
      <Reviews />
      <ButtonScrollUp scrolledValue={SCROLLED_VALUE} />
    </>
  );
};

export default HomeModule;
