import { useState } from "react";
import ItemFilter from "./ItemFilter";
import { MdExpandMore } from "react-icons/md";

interface Props {
  id: number,
  nameTitle: string,
  itemsFilter: Array<{id:number, nameFilter: string}>
}

const DropdownFilter = ( dropdownFilterData: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!isOpen);
  return (
    <div className="dropdown-filter">
      <div className="dropdown-filter__title-list" onClick={handleOpen}>
        <span className="dropdown-filter__name-title">
          {dropdownFilterData.nameTitle}
        </span>
        <MdExpandMore
          className={
            isOpen
              ? "dropdown-filter__icon rotate-icon"
              : "dropdown-filter__icon"
          }
        />
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