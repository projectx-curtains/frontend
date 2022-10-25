import { FC } from "react";
import { IItemsFilterProps } from "./interfaces";

const ItemFilter: React.FC<IItemsFilterProps> = ({ itemsFilter }) => {
  return (
    <>
      {itemsFilter.map((itemFilter) => (
        <div className="item-filter" key={itemFilter.id}>
          <input
            className="item-filter__checkbox"
            type="checkbox"
            id={itemFilter.id}
          ></input>
          <label className="item-filter__name" htmlFor={itemFilter.id}>
            {itemFilter.nameFilter}
          </label>
        </div>
      ))}
    </>
  );
};
export default ItemFilter;
