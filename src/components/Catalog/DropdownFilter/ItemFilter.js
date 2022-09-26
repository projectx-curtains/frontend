const ItemFilter = ({
  namesItems,
  boolColorFilter,
  boolUsingGradient,
  colorTop,
  colorMid,
  colorBot,
}) => {
  return namesItems.map((el, i) => {
    return (
      <div className="item-filter">
        {boolUsingGradient || (
          <input
            className="item-filter__checkbox"
            type="checkbox"
            id={i}
          ></input>
        )}
        {boolColorFilter && (
          <div
            className="item-filter__colors"
            style={
              boolUsingGradient ? { marginLeft: 0 } : { marginLeft: "33px" }
            }
          >
            <span
              className="color-top"
              style={{ backgroundColor: colorTop }}
            ></span>
            <span
              className="color-mid"
              style={{ backgroundColor: colorMid }}
            ></span>
            <span
              className="color-bot"
              style={{ backgroundColor: colorBot }}
            ></span>
          </div>
        )}
        <label className="item-filter__name" for={i}>
          {el}
        </label>
      </div>
    );
  });
};
export default ItemFilter;
