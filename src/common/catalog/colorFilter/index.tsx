import { sampleColorFiltersData } from "../components/DropdownColorFilter/mocks/sampleColorFiltersData";
import DropdownColorFilter from "../components/DropdownColorFilter";
import DropdownFilter from "../components/DropdownFilter";
import style from "./styles/index.module.scss";

const ColorFilter = () => {
  const itemsColorFilter = sampleColorFiltersData.map((filter) => (
    <DropdownColorFilter
      key={filter.id}
      title={filter.title}
      gradientColorTop={filter.gradientColorTop}
      gradientColorMid={filter.gradientColorMid}
      gradientColorBot={filter.gradientColorBot}
      dropdownFilterColor={filter.dropdownFilterColor}
    />
  ));
  return (
    <div className={style["colorFilter"]}>
      <DropdownFilter title="Цвет ткани" itemsFilter={itemsColorFilter}>
        {itemsColorFilter}
      </DropdownFilter>
    </div>
  );
};

export default ColorFilter;
