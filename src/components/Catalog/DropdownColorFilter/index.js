import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import ItemColorFilter from "./ItemColorFilter";

const DropdownColorFilter = ({ colorFilterData }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(!isOpen);
  return (
    <div className="dropdown-color-filter">
      <div className="dropdown-color-filter__title-list" onClick={handleOpen}>
        <div className="dropdown-color-filter__gradient-colors">
          <span
            className="color-top"
            style={{ backgroundColor: colorFilterData.gradientColorTop }}
          ></span>
          <span
            className="color-mid"
            style={{ backgroundColor: colorFilterData.gradientColorMid }}
          ></span>
          <span
            className="color-bot"
            style={{ backgroundColor: colorFilterData.gradientColorBot }}
          ></span>
        </div>
        <span className="dropdown-color-filter__name-title">
          {colorFilterData.nameTitle}
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
          <ItemColorFilter itemFilterData={colorFilterData} />;
        </div>
      )}
    </div>
  );
};
export default DropdownColorFilter;
