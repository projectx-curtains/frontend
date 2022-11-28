import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import ProductCard from "@common/productCard/components";
import ButtonScrollUp from "@common/buttonScrollUp";
import TagCloud from "../TagCloud";
import ModalWindow from "./ModalWindow";
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
        <MobileFilterImg onClick={handleOpenFilter} />
        <ModalWindow open={openFilter} handleClose={handleCloseFilter}>
          <div className={style["clear-icon"]}>
            <ClearIcon
              onClick={handleCloseFilter}
              fontSize="medium"
              sx={{ color: "#C2C4CB" }}
            />
          </div>
          <ProductFilters />
        </ModalWindow>
        <MobileSortPriceImg onClick={setOpenSortPrice} />
        <ModalWindow open={openSortPrice} handleClose={handleCloseSortPrice}>
          <PriceFilter />
        </ModalWindow>
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
