import React from "react";
import classnames from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import { IFilterTagsProps } from "../interfaces";
import style from "../styles/index.module.scss";
import classNames from "classnames";

const FilterTags: React.FC<IFilterTagsProps> = ({ tags, handleClose }) => {
  const withColorTag = style["tag-cloud__with-color-tag"];
  return (
    <div className={style["tag-cloud"]}>
      {tags.map((tag, index) => (
        <div
          key={tag.id}
          className={classnames(style["tag-cloud__item"], {
            [style["remove-tag"]]: tag.isTagRemoved,
          })}>
          {tag.color && (
            <span
              className={style["tag-cloud__item-color-the-square"]}
              style={{ background: tag.color }}></span>
          )}
          <p
            className={classNames(style["tag-cloud__item-name"], {
              [withColorTag]: tag.color,
            })}>
            {tag.name}
          </p>
          <div
            className={style["tag-cloud__item-button-cross"]}
            onClick={() => handleClose(index)}>
            <CloseIcon />
          </div>
        </div>
      ))}
    </div>
  );
};
export default FilterTags;
