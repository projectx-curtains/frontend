import { FC } from "react";

type FilterData {
  id: string,
  nameFilter: string,
  color: string,
}

interface Props {
  itemFilterData: Array<FilterData>
}

const ItemColorFilter: FC<Props> = ( itemFilterData ) => {
  return itemFilterData.map((filterСolor) => {
    return (
      <div className="item-color-filter" key={filterСolor.id}>
        <input
          className="item-color-filter__checkbox"
          type="checkbox"
          id={filterСolor.id}
        ></input>
        <div
          className="item-color-filter__color"
          style={{ background: filterСolor.color }}
        ></div>
        <label className="item-color-filter__name" htmlFor={filterСolor.id}>
          {filterСolor.nameFilter}
        </label>
      </div>
    );
  });
};
export default ItemColorFilter;