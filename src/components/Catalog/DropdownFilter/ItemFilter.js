const ItemFilter = ({ namesItems }) => {
  return namesItems.map((el, i) => {
    return (
      <div className="item-filter">
        <input className="item-filter__checkbox" type="checkbox" id={i}></input>
        <label className="item-filter__name" for={i}>
          {el}
        </label>
      </div>
    );
  });
};
export default ItemFilter;
