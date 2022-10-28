import React from "react";
import classnames from "classnames";
import { MdClose } from "react-icons/md";
import { ITagCloudProps } from "../interfaces";

const TagCloud: React.FC<ITagCloudProps> = ({ tags, handleClose }) => {
  return (
    <div className="tag-cloud">
      {tags.map((tag) => (
        <div
          key={tag.id}
          className={classnames("tag-cloud__item", {
            "remove-tag": tag.removeTag,
          })}
        >
          {tag.colorTheSquare && (
            <span
              className="tag-cloud__item-color-the-square"
              style={{ background: tag.color }}
            ></span>
          )}
          <p
            className="tag-cloud__item-name"
            style={
              tag.colorTheSquare
                ? { paddingLeft: "6px" }
                : { paddingLeft: "12px" }
            }
          >
            {tag.name}
          </p>
          <div
            className="tag-cloud__item-button-cross"
            onClick={() => handleClose(tag.id)}
          >
            <MdClose />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TagCloud;
