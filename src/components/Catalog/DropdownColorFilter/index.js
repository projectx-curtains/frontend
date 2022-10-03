import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import ItemColorFilter from "./ItemColorFilter";

const DropdownColorFilter = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(!isOpen);
  return (
    <div className="dropdown-color-filter">
      <div className="dropdown-color-filter__title-list" onClick={handleOpen}>
        <div className="dropdown-color-filter__gradient-colors">
          <span
            className="color-top"
            style={{ backgroundColor: data.gradientColorTop }}
          ></span>
          <span
            className="color-mid"
            style={{ backgroundColor: data.gradientColorMid }}
          ></span>
          <span
            className="color-bot"
            style={{ backgroundColor: data.gradientColorBot }}
          ></span>
        </div>
        <span className="dropdown-color-filter__name-title">
          {data.nameTitle}
        </span>
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      {isOpen && (
        <div className="dropdown-color-filter__scrolling-block">
          <ItemColorFilter data={data} />;
        </div>
      )}
    </div>
  );
};
export default DropdownColorFilter;
