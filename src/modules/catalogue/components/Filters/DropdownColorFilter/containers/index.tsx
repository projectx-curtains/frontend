import React, { useState } from "react";

import DropdownColorFilter from "../components";

import { IColorDropdownFilterContainerProps } from "../interfaces";

const DropdownColorFilterContainer: React.FC<
  IColorDropdownFilterContainerProps
> = ({ id, title, gradient, dropdownFilterColor }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(!isOpen);

  const props = {
    id,
    title,
    gradient,
    isOpen,
    handleOpen,
    dropdownFilterColor,
  };

  return <DropdownColorFilter {...props} />;
};
export default DropdownColorFilterContainer;
