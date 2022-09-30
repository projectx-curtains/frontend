import { useState } from "react";
import Cross from "./Cross";

const TagCloud = ({ data }) => {
  const [arrayData, setArrayData] = useState([...data]);

  const clickOnButtonCross = (id) => {
    setArrayData(
      arrayData.map((obj) =>
        obj.id === id ? { ...obj, removeTag: true } : obj
      )
    );
    setTimeout(
      () => setArrayData(arrayData.filter((obj) => obj.id !== id)),
      400
    );
  };

  return (
    <div className="tag-cloud">
      {arrayData.map((obj) => {
        return (
          <div
            className={
              obj.removeTag ? "tag-cloud__item remove-tag" : "tag-cloud__item"
            }
          >
            {obj.colorTheSquare && (
              <span
                className="tag-cloud__item-color-the-square"
                style={{ background: obj.color }}
              ></span>
            )}
            <p
              className="tag-cloud__item-name"
              style={
                obj.colorTheSquare
                  ? { paddingLeft: "6px" }
                  : { paddingLeft: "12px" }
              }
            >
              {obj.name}
            </p>
            <div
              className="tag-cloud__item-button-cross"
              onClick={() => clickOnButtonCross(obj.id)}
            >
              <Cross />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TagCloud;
