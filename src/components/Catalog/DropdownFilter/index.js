import { useState } from "react";
import ItemFilter from "../ItemFilter";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropdownFilter = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  // задал здесь массив для примера
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
        <span className="dropdown-filter__name-title">{data.nameFilter}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && (
        <div className="dropdown-filter__scrolling-block">
          <ItemFilter namesItems={namesItems} />
        </div>
      )}
    </div>
  );
};
export default DropdownFilter;
