import { Field } from "formik";
import { IItemsFilterProps } from "../interfaces";
import style from "../styles/index.module.scss";

const ItemFilter: React.FC<IItemsFilterProps> = ({ filters }) => {
  return (
    <>
      {filters.map((filter) => (
        <div className={style["item-filter"]} key={filter.id}>
          <Field
            className={style["item-filter__checkbox"]}
            type="checkbox"
            name="dropdownFilters"
            value={filter.title}
            id={filter.id}
          ></Field>
          <label className={style["item-filter__name"]} htmlFor={filter.id}>
            {filter.title}
          </label>
        </div>
      ))}
    </>
  );
};
export default ItemFilter;
