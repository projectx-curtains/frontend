interface Props {
  id: number,
  nameFilter: string
}

const ItemFilter = ( itemsFilter: Array<Props>) => {
  return itemsFilter.map((itemFilter) => {
    return (
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
    );
  });
};
export default ItemFilter;