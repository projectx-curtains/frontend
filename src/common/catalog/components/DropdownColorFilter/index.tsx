import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import ItemColorFilter from "./ItemColorFilter";
import { IColorDropdownFilterProps } from "./interfaces";

const DropdownColorFilter: React.FC<IColorDropdownFilterProps> = (
  {id, nameTitle, gradientColorTop, gradientColorMid, gradientColorBot, dropdownFilterColor}
) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(!isOpen);
  return (
    <div className="dropdown-color-filter">
      <div className="dropdown-color-filter__title-list" onClick={handleOpen}>
        <div className="dropdown-color-filter__gradient-colors">
          <span
            className="color-top"
            style={{ backgroundColor: gradientColorTop }}
          ></span>
          <span
            className="color-mid"
            style={{ backgroundColor: gradientColorMid }}
          ></span>
          <span
            className="color-bot"
            style={{ backgroundColor: gradientColorBot }}
          ></span>
        </div>
        <span className="dropdown-color-filter__name-title">
          {nameTitle}
        </span>
        <MdArrowDropDown
          className={
            isOpen
              ? "dropdown-color-filter__icon rotate-icon"
              : "dropdown-color-filter__icon"
          }
        />
      </div>
      {isOpen && (
        <div className="dropdown-color-filter__scrolling-block">
          <ItemColorFilter
            itemFilterData={dropdownFilterColor}
          />          
        </div>
      )}
    </div>
  );
};
export default DropdownColorFilter;
