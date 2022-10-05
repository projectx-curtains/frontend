import { useState } from "react";
import { MdClose } from "react-icons/md";

const TagCloud = ({ tagsData }) => {
  const [arrayTagsData, setArrayData] = useState([...tagsData]);

  const clickOnButtonCross = (id) => {
    setArrayData(
      arrayTagsData.map((tagData) =>
        tagData.id === id ? { ...tagData, removeTag: true } : tagData
      )
    );
    setTimeout(
      () => setArrayData(arrayTagsData.filter((tagData) => tagData.id !== id)),
      400
    );
  };

  return (
    <div className="tag-cloud">
      {arrayTagsData.map((tagData) => {
        return (
          <div
            className={`tag-cloud__item
              ${tagData.removeTag ? "remove-tag" : ""}`}
          >
            {tagData.colorTheSquare && (
              <span
                className="tag-cloud__item-color-the-square"
                style={{ background: tagData.color }}
              ></span>
            )}
            <p
              className="tag-cloud__item-name"
              style={
                tagData.colorTheSquare
                  ? { paddingLeft: "6px" }
                  : { paddingLeft: "12px" }
              }
            >
              {tagData.name}
            </p>
            <div
              className="tag-cloud__item-button-cross"
              onClick={() => clickOnButtonCross(tagData.id)}
            >
              <MdClose />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TagCloud;
