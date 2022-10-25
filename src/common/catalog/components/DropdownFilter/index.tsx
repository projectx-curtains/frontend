import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import ItemFilter from "./ItemFilter";
import { IDropdownFilterProps } from "./interfaces";

const DropdownFilter: React.FC<IDropdownFilterProps> = ({
  nameTitle,
  itemsFilter,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!isOpen);
  return (
    <div className="dropdown-filter">
      <div className="dropdown-filter__title-list" onClick={handleOpen}>
        <span className="dropdown-filter__name-title">{nameTitle}</span>
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
          <ItemFilter itemsFilter={itemsFilter} />
        </div>
      )}
    </div>
  );
};
export default DropdownFilter;
