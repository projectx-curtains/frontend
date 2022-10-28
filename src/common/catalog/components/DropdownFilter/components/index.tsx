import classnames from "classnames";
import { MdExpandMore } from "react-icons/md";
import ItemFilter from "./ItemFilter";
import { IDropdownFilterProps } from "../interfaces";

const DropdownFilter: React.FC<IDropdownFilterProps> = ({
  id,
  title,
  itemsFilter,
  isOpen,
  handleOpen,
}) => {
  return (
    <div className="dropdown-filter">
      <div className="dropdown-filter__title-list" onClick={handleOpen}>
        <span className="dropdown-filter__name-title">{title}</span>
        <MdExpandMore
          className={classnames("dropdown-filter__icon", {
            "rotate-icon": isOpen,
          })}
        />
      </div>
      {isOpen && (
        <div className="dropdown-filter__scrolling-block">
          <ItemFilter filters={itemsFilter} />
        </div>
      )}
    </div>
  );
};
export default DropdownFilter;
