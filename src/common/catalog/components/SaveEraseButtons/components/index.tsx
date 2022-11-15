import FilterButton from "./Button";

import style from "../styles/index.module.scss";

const SaveEraseButtons = () => {
  return (
    <div className={style["save-erase-buttons"]}>
      <FilterButton type="submit" variant="contained">
        Показать варианты
      </FilterButton>
      <FilterButton type="reset" variant="outlined">
        Очистить фильтр
      </FilterButton>
    </div>
  );
};
export default SaveEraseButtons;
