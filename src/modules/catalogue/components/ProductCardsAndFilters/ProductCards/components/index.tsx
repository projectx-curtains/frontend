import PriceFilter from "@modules/catalogue/components/Filters/PriceFilter";
import FilterTags from "@modules/catalogue/components/FilterTags";
import MobileFiltersMenu from "@modules/catalogue/components/MobileFiltersMenu";
import ProductCard from "@common/productCard/components";

// import NothingFound from "../../../NothingFound";

import style from "../styles/index.module.scss";

const ProductCards: React.FC = () => {
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
      <MobileFiltersMenu />

      {/* <NothingFound /> */}

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
