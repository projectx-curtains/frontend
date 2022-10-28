import React from "react";
import classnames from "classnames";

import { MdArrowDropDown } from "react-icons/md";
import ItemColorFilter from "./ItemColorFilter";

import { IColorDropdownFilterProps } from "../interfaces";

const DropdownColorFilter: React.FC<IColorDropdownFilterProps> = ({
  title,
  gradientColorTop,
  gradientColorMid,
  gradientColorBot,
  isOpen,
  handleOpen,
  dropdownFilterColor,
}) => {
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
        <span className="dropdown-color-filter__name-title">{title}</span>
        <MdArrowDropDown
          className={classnames("dropdown-color-filter__icon", {
            "rotate-icon": isOpen,
          })}
        />
      </div>
      {isOpen && (
        <div className="dropdown-color-filter__scrolling-block">
          <ItemColorFilter filters={dropdownFilterColor} />
        </div>
      )}
    </div>
  );
};
export default DropdownColorFilter;
