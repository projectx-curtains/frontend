import React from "react";
import Title from "../../../components/Title";
import WhyWeAreItem from "./WhyWeAreItem";
import { app_mockData } from "../../../assets/data/app_mockData";

const WhyWeAre = () => {
  return (
    <section className="why-we-are">
      <div className="why-we-are__container">
        <Title text="Почему мы"></Title>
        <div className="why-we-are__content">
          {app_mockData &&
            app_mockData.whyWeAre.items.map((item, i) => {
              return (
                <WhyWeAreItem image={item.image} text={item.text} key={i} />
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default WhyWeAre;
