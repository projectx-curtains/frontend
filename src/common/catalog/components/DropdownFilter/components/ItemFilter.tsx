import { IItemsFilterProps } from "../interfaces";

const ItemFilter: React.FC<IItemsFilterProps> = ({ filters }) => {
  return (
    <>
      {filters.map((filter) => (
        <div className="item-filter" key={filter.id}>
          <input
            className="item-filter__checkbox"
            type="checkbox"
            id={filter.id}
          ></input>
          <label className="item-filter__name" htmlFor={filter.id}>
            {filter.title}
          </label>
        </div>
      ))}
    </>
  );
};
export default ItemFilter;
