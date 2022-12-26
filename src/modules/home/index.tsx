import Banner from "@modules/home/components/banner";
import Categories from "@modules/home/components/categories";
import ProductGallery from "@modules/home/components/productGallery";
import WhyWeAre from "@modules/home/components/whyWeAre";
import ButtonScrollUp from "@common/buttonScrollUp/components";
import OurWork from "@modules/home/components/ourWork";
import Reviews from "@modules/home/components/reviews";

import { SCROLLED_VALUE } from "./constants";

import { NewProduct_mockData } from "@assets/data/newProduct_mockData";

const HomeModule = () => {
  return (
    <>
      <Banner />
      <Categories />
      <ProductGallery
        titleText="Новинки"
        items={NewProduct_mockData}
      />
      <ProductGallery
        titleText="Популярное"
        items={NewProduct_mockData}
      />
      <OurWork />
      <WhyWeAre />
      <Reviews />
      <ButtonScrollUp scrolledValue={SCROLLED_VALUE} />
    </>
  );
};

export default HomeModule;
