const ItemColorFilter = ({ data }) => {
  return data.dropdownFilterColor.map((obj) => {
    return (
      <div className="item-color-filter">
        <input
          className="item-color-filter__checkbox"
          type="checkbox"
          id={obj.id}
        ></input>
        <div
          className="item-color-filter__color"
          style={{ background: obj.color }}
        ></div>
        <label className="item-color-filter__name" for={obj.id}>
          {obj.nameFilter}
        </label>
      </div>
    );
  });
};
export default ItemColorFilter;
