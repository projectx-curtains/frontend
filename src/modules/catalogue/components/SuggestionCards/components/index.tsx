import ProductCard from "@common/productCard/components";
import style from "../styles/index.module.scss";

const SuggestionCards = (children: any) => {
  return (
    <div className={style["intresting-cards"]}>
      <h1 className={style["title"]}>Вам будет интересно</h1>
      <div className={style["wrapper-cards"]}>
        {/* {children} */}
        <ProductCard
          image="/#"
          name="Test Card"
          price={100}
          link="link"
          variant="search-popup"
        />
      </div>
    </div>
  );
};
export default SuggestionCards;
