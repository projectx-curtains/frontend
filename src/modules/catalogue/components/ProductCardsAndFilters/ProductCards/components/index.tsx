import { Drawer } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import PriceFilter from "@modules/catalogue/components/Filters/PriceFilter";
import FilterTags from "@modules/catalogue/components/FilterTags";
import ProductCard from "@common/productCard/components";
// import NothingFound from "../../../NothingFound";
import ProductFilters from "../../ProductFilters";
import { IProductCardsProps } from "../interfacer";
import MobileFilterImg from "../../../../../../../assets/svg/mobileFilter.svg";
import MobileSortPriceImg from "../../../../../../../assets/svg/mobileSortPrice.svg";

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
        <Drawer
          anchor="left"
          open={openFilter}
          onClose={handleCloseFilter}
          sx={{
            "& .MuiDrawer-paper": {
              mt: "56px",
              height: "auto",
              width: "304px",
              alignItems: "center",
              paddingTop: "18px",
              paddingBottom: "10px",
            },
          }}>
          <ClearIcon
            onClick={handleCloseFilter}
            fontSize="medium"
            sx={{
              color: "#C2C4CB",
              ml: "auto",
              mr: "16px",
              display: "block",
              cursor: "pointer",
            }}
          />
          <ProductFilters />
        </Drawer>
        <MobileSortPriceImg
          className={style["mobile-sort-price-img"]}
          onClick={handleOpenSortPrice}
        />
        <Drawer
          anchor="right"
          open={openSortPrice}
          onClose={handleCloseSortPrice}
          sx={{
            "& .MuiDrawer-paper": {
              height: "38px",
              mt: "176px",
            },
          }}>
          <PriceFilter />
        </Drawer>
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
