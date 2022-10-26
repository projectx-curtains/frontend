import { useState } from "react";
import { MdClose } from "react-icons/md";
import { ITagCloudProps } from "./interfaces";

const TagCloud: React.FC<ITagCloudProps> = ({
  id,
  name,
  colorTheSquare,
  color,
  removeTag,
}) => {
  const [arrayTagsData, setArrayData] = useState([
    ...[{ id, name, colorTheSquare, color, removeTag }],
  ]);

  const clickOnButtonCross = (id: number) => {
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
      {arrayTagsData.map((tagData) => (
        <div
          key={tagData.id}
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
      ))}
    </div>
  );
};
export default TagCloud;
