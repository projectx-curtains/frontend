import React from "react";
import classnames from "classnames";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ColorFilterItem from "./ColorFilterItem";

import { IColorDropdownFilterProps } from "../interfaces";

import { createSteppedGradient } from "@modules/catalogue/components/DropdownColorFilter/utils/gradient";

import style from "../styles/index.module.scss";

const DropdownColorFilter: React.FC<IColorDropdownFilterProps> = ({
  title,
  gradient,
  isOpen,
  handleOpen,
  dropdownFilterColor,
}) => {
  return (
    <div className={style["dropdown-color-filter"]}>
      <div
        className={style["dropdown-color-filter__title-list"]}
        onClick={handleOpen}
      >
        <div
          className={style["dropdown-color-filter__gradient-colors"]}
          style={createSteppedGradient(gradient)}
        />
        <span className={style["dropdown-color-filter__name-title"]}>
          {title}
        </span>
        <ArrowDropDownIcon
          className={classnames(style["dropdown-color-filter__icon"], {
            [style["rotate-icon"]]: isOpen,
          })}
        />
      </div>
      {isOpen && (
        <div className={style["dropdown-color-filter__scrolling-block"]}>
          <ColorFilterItem filters={dropdownFilterColor} />
        </div>
      )}
    </div>
  );
};
export default DropdownColorFilter;
