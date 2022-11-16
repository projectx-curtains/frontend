import PriceFilter from "@modules/catalogue/components/PriceFilter";
import TagCloud from "@modules/catalogue/components/TagCloud";
import { sampleDataTags } from "@modules/catalogue/components/TagCloud/mocks/sampleDataTags";
import ProductCard from "@common/productCard/components";

import style from "../styles/productCards.module.scss";

const ProductCards = () => {
  return (
    <div className={style["cards-module"]}>
      <div className={style["cards-module__filter-values"]}>
        <div className={style["tag-cloud"]}>
          {sampleDataTags.map((tag) => (
            <TagCloud
              key={tag.id}
              name={tag.name}
              colorTheSquare={tag.colorTheSquare}
              color={tag.color}
            />
          ))}
        </div>
        <div className={style["price-filter"]}>
          <PriceFilter />
        </div>
      </div>

      <div className={style["cards-module__cards"]}>
        <ProductCard
          image="/#"
          name="Test Card"
          price={100}
          link="link"
          variant="categories"
        />
        <ProductCard
          image="/#"
          name="Test Card"
          price={100}
          link="link"
          variant="categories"
        />
        <ProductCard
          image="/#"
          name="Test Card"
          price={100}
          link="link"
          variant="categories"
        />
        <ProductCard
          image="/#"
          name="Test Card"
          price={100}
          link="link"
          variant="categories"
        />
      </div>
    </div>
  );
};
export default ProductCards;
