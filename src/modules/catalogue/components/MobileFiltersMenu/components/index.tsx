import ClearIcon from "@mui/icons-material/Clear";
import { Drawer } from "@mui/material";
import PriceFilter from "@modules/catalogue/components/Filters/PriceFilter";
import ProductFilters from "@modules/catalogue/components/ProductCardsAndFilters/ProductFilters";
import { IMobileFiltersMenuProps } from "../interfaces";
import MobileFilterImg from "@assets/svg/mobileFilter.svg";
import MobileSortPriceImg from "@assets/svg/mobileSortPrice.svg";
import {
  styleClearIcon,
  styleLeftDrawer,
  styleRightDrawer,
} from "../mocks/styleClearIcon";

import style from "../styles/index.module.scss";

const MobileFiltersMenu: React.FC<IMobileFiltersMenuProps> = ({
  openFilter,
  handleOpenFilter,
  handleCloseFilter,
  openSortPrice,
  handleOpenSortPrice,
  handleCloseSortPrice,
}) => {
  return (
    <div className={style["mobile-module"]}>
      <MobileFilterImg
        className={style["mobile-filter-img"]}
        onClick={handleOpenFilter}
      />
      <Drawer
        anchor="left"
        open={openFilter}
        onClose={handleCloseFilter}
        sx={styleLeftDrawer}>
        <ClearIcon
          onClick={handleCloseFilter}
          fontSize="medium"
          sx={styleClearIcon}
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
        sx={styleRightDrawer}>
        <PriceFilter />
      </Drawer>
    </div>
  );
};
export default MobileFiltersMenu;
