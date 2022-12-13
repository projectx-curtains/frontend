import { sampleColorFiltersData } from "../DropdownColorFilter/mocks/sampleColorFiltersData";
import DropdownColorFilter from "../DropdownColorFilter";
import DropdownFilter from "../DropdownFilter";
import style from "./styles/index.module.scss";

const ColorFilter = () => {
  const itemsColorFilter = sampleColorFiltersData.map(
    ({ id, title, gradient, dropdownFilterColor }) => (
      <DropdownColorFilter
        id={id}
        key={id}
        title={title}
        gradient={gradient}
        dropdownFilterColor={dropdownFilterColor}
      />
    )
  );
  return (
    <div className={style["colorFilter"]}>
      <DropdownFilter title="Цвет ткани">{itemsColorFilter}</DropdownFilter>
    </div>
  );
};

export default ColorFilter;
