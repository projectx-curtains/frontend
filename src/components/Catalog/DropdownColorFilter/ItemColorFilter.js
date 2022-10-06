const ItemColorFilter = ({ itemFilterData }) => {
  return itemFilterData.dropdownFilterColor.map((filterСolor) => {
    return (
      <div className="item-color-filter">
        <input
          className="item-color-filter__checkbox"
          type="checkbox"
          id={filterСolor.id}
        ></input>
        <div
          className="item-color-filter__color"
          style={{ background: filterСolor.color }}
        ></div>
        <label className="item-color-filter__name" for={filterСolor.id}>
          {filterСolor.nameFilter}
        </label>
      </div>
    );
  });
};
export default ItemColorFilter;
