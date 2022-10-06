const ItemFilter = ({ itemsFilter }) => {
  return itemsFilter.map((itemFilter) => {
    return (
      <div className="item-filter">
        <input
          className="item-filter__checkbox"
          type="checkbox"
          id={itemFilter.id}
        ></input>
        <label className="item-filter__name" for={itemFilter.id}>
          {itemFilter.nameFilter}
        </label>
      </div>
    );
  });
};
export default ItemFilter;
