import React, { useState } from "react";
import classnames from "classnames";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IAccordion } from "../interfaces";
import style from "../styles/footer.module.scss";

const Accordion: React.FC<IAccordion> = ({ children, title, className }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classnames(style.accordion, style[className])}>
      <div
        className={style.accordion__button}
        onClick={() => setIsActive((isActive) => !isActive)}>
        <p className={style.accordion__title}>{title}</p>
        <ChevronRightIcon
          className={classnames(style.accordion__icon, {
            [style["accordion__icon--rotate"]]: isActive,
          })}
        />
      </div>
      <div
        className={classnames(style.accordion__content, {
          [style["accordion__content--active"]]: isActive,
        })}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
