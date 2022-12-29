import { useState } from "react";
import MobileFiltersMenu from "../components";

const MobileFiltersMenuContainer = () => {
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
  const props = {
    openFilter,
    handleOpenFilter,
    handleCloseFilter,
    openSortPrice,
    handleOpenSortPrice,
    handleCloseSortPrice,
  };
  return <MobileFiltersMenu {...props} />;
};
export default MobileFiltersMenuContainer;
