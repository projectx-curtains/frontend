import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ClearIcon from "@mui/icons-material/Clear";
import ProductCard from "@common/productCard/components";
import TagCloud from "../TagCloud";
import ProductFilters from "../productFilters";
import PriceFilter from "../PriceFilter";
import MobileFilterImg from "../../../../../assets/svg/mobileFilter.svg";
import MobileSortPriceImg from "../../../../../assets/svg/mobileSortPrice.svg";

import style from "./styles/index.module.scss";

const MobileModule = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const [openSortPrice, setOpenSortPrice] = useState(false);
  const handleOpenSortPrice = () => {
    setOpenSortPrice(true);
  };
  const handleCloseSortPrice = () => {
    setOpenSortPrice(false);
  };

  return (
    <div className={style["mobile-module"]}>
      <TagCloud />
      <div className={style["mobile-module__icons"]}>
        <MobileFilterImg
          className={style["mobile-filter-img"]}
          onClick={handleOpenFilter}
        />
        <Drawer anchor="left" open={openFilter} onClose={handleCloseFilter}>
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
          }}
        >
          <PriceFilter />
        </Drawer>
      </div>
      <div className={style["mobile-module__cards"]}>
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
export default MobileModule;
