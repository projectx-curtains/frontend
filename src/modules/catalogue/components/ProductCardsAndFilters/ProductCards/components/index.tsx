import ClearIcon from "@mui/icons-material/Clear";
import PriceFilter from "@modules/catalogue/components/Filters/PriceFilter";
import FilterTags from "@modules/catalogue/components/FilterTags";
import ProductCard from "@common/productCard/components";
import DrawerComponent from "@modules/catalogue/components/DrawerComponent";
// import NothingFound from "../../../NothingFound";
import ProductFilters from "../../ProductFilters";
import { IProductCardsProps } from "../interfaces";
import MobileFilterImg from "@assets/svg/mobileFilter.svg";
import MobileSortPriceImg from "@assets/svg/mobileSortPrice.svg";
import {
  styleClearIcon,
  styleLeftDrawer,
  styleRightDrawer,
} from "../mocks/styleClearIcon";

import style from "../styles/index.module.scss";

const ProductCards: React.FC<IProductCardsProps> = ({
  openFilter,
  handleOpenFilter,
  handleCloseFilter,
  openSortPrice,
  handleOpenSortPrice,
  handleCloseSortPrice,
}) => {
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

      <div className={style["mobile-module"]}>
        <MobileFilterImg
          className={style["mobile-filter-img"]}
          onClick={handleOpenFilter}
        />
        <DrawerComponent
          anchor="left"
          open={openFilter}
          onClose={handleCloseFilter}
          styleVariable={styleLeftDrawer}>
          <ClearIcon
            onClick={handleCloseFilter}
            fontSize="medium"
            sx={styleClearIcon}
          />
          <ProductFilters />
        </DrawerComponent>
        <MobileSortPriceImg
          className={style["mobile-sort-price-img"]}
          onClick={handleOpenSortPrice}
        />
        <DrawerComponent
          anchor="right"
          open={openSortPrice}
          onClose={handleCloseSortPrice}
          styleVariable={styleRightDrawer}>
          <PriceFilter />
        </DrawerComponent>
      </div>

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
