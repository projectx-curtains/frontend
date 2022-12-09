import { useField } from "formik";
import { IItemsFilterProps } from "../interfaces";
import style from "../styles/index.module.scss";

const ItemFilter: React.FC<IItemsFilterProps> = ({ filters }) => {
  const [field] = useField("dropdownFilters");

  return (
    <>
      {filters.map(({ id, title }) => (
        <div className={style["item-filter"]} key={id}>
          <input
            className={style["item-filter__checkbox"]}
            type="checkbox"
            {...field}
            value={title}
            id={id}
          ></input>
          <label className={style["item-filter__name"]} htmlFor={id}>
            {title}
          </label>
        </div>
      ))}
    </>
  );
};
export default ItemFilter;
