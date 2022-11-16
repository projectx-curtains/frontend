import React, { useState } from "react";

import DropdownColorFilter from "../components";

import { IColorDropdownFilterContainerProps } from "../interfaces";

const DropdownColorFilterContainer: React.FC<
  IColorDropdownFilterContainerProps
> = ({
  id,
  title,
  gradientColorTop,
  gradientColorMid,
  gradientColorBot,
  dropdownFilterColor,
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(!isOpen);

  const props = {
    id,
    title,
    gradientColorTop,
    gradientColorMid,
    gradientColorBot,
    isOpen,
    handleOpen,
    dropdownFilterColor,
  };

  return <DropdownColorFilter {...props} />;
};
export default DropdownColorFilterContainer;
