import { IItemsFilterProps } from "../interfaces";
import style from "../styles/index.module.scss";

const ItemFilter: React.FC<IItemsFilterProps> = ({ filters }) => {
  return (
    <>
      {filters.map((filter) => (
        <div
          className={style["item-filter"]}
          key={filter.id}>
          <input
            className={style["item-filter__checkbox"]}
            type="checkbox"
            id={filter.id}></input>
          <label
            className={style["item-filter__name"]}
            htmlFor={filter.id}>
            {filter.title}
          </label>
        </div>
      ))}
    </>
  );
};
export default ItemFilter;
