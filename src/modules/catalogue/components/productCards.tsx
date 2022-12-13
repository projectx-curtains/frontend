import PriceFilter from "@modules/catalogue/components/Filters/PriceFilter";
import FilterTags from "@modules/catalogue/components/FilterTags";
import ProductCard from "@common/productCard/components";

import style from "../styles/productCards.module.scss";

const ProductCards = () => {
  return (
    <div className={style["cards-module"]}>
      <div className={style["cards-module__filter-values"]}>
        <div className={style["tag-cloud"]}>
          <FilterTags />
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
