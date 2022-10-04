import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import ProductGallery from "../../components/ProductGallery";
import OurWork from "./OurWork";
import WhyWeAre from "./WhyWeAre";
import Reviews from "./Reviews";
import { NewProduct_mockData } from "../../assets/data/newProduct_mockData";

const Home = (props) => {
  return (
    <main className="home">
      <Banner />
      <Categories />
      <ProductGallery titleText="Новинки" items={NewProduct_mockData} />
      <ProductGallery titleText="Популярное" items={NewProduct_mockData} />
      <OurWork />
      <WhyWeAre />
      <Reviews />
    </main>
  );
};

export default Home;
