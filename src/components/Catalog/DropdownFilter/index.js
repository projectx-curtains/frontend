import { useState } from "react";
import ItemFilter from "./ItemFilter";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const DropdownFilter = ({ dropdownFilterData }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(!isOpen);
  return (
    <div className="dropdown-filter">
      <div className="dropdown-filter__title-list" onClick={handleOpen}>
        <span className="dropdown-filter__name-title">
          {dropdownFilterData.nameTitle}
        </span>
        {isOpen ? <MdExpandLess /> : <MdExpandMore />}
      </div>
      {isOpen && (
        <div className="dropdown-filter__scrolling-block">
          <ItemFilter itemsFilter={dropdownFilterData.itemsFilter} />
        </div>
      )}
    </div>
  );
};
export default DropdownFilter;
