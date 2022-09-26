import { useState } from "react";
import ItemFilter from "./ItemFilter";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropdownFilter = ({ nameTitle }) => {
  const [isOpen, setOpen] = useState(false);
  const namesItems = [
    "Австрийские",
    "Английские",
    "Витражные",
    "Императорские",
    "Итальянские",
    "уже скролл 1",
    "уже скролл 2",
  ];

  const handleOpen = () => setOpen(!isOpen);
  return (
    <div className="dropdown-filter">
      <div className="dropdown-filter__title-list" onClick={handleOpen}>
        <span className="dropdown-filter__name-title">{nameTitle}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && (
        <div className="dropdown-filter__scrolling-block">
          <ItemFilter
            namesItems={namesItems}
            boolColorFilter={false}
            boolUsingGradient={false}
            colorTop="#59a70b"
            colorMid="#ac0000"
            colorBot="#a1a4ae"
          />
        </div>
      )}
    </div>
  );
};
export default DropdownFilter;
