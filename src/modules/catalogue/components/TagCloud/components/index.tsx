import React from "react";
import classnames from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import { ITagCloudProps } from "../interfaces";
import style from "../styles/index.module.scss";

const TagCloud: React.FC<ITagCloudProps> = ({ tags, handleClose }) => {
  return (
    <div className={style["tag-cloud"]}>
      {tags.map((tag, index) => (
        <div
          key={tag.id}
          className={classnames(style["tag-cloud__item"], {
            [style["remove-tag"]]: tag.isTagRemoved,
          })}
        >
          {tag.color && (
            <span
              className={style["tag-cloud__item-color-the-square"]}
              style={{ background: tag.color }}
            ></span>
          )}
          <p
            className={style["tag-cloud__item-name"]}
            style={tag.color ? { paddingLeft: "6px" } : { paddingLeft: "12px" }}
          >
            {tag.name}
          </p>
          <div
            className={style["tag-cloud__item-button-cross"]}
            onClick={() => handleClose(index)}
          >
            <CloseIcon />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TagCloud;
