import React, { useState } from "react";
import classNames from "classnames";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import style from "../styles/footer.module.scss";

interface IAccordion {
  children: React.ReactNode;
  title: string;
  className: string;
}

function Accordion({ children, title, className }: IAccordion) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classNames(style.accordion, style[className])}>
      <div
        className={style.accordion__button}
        onClick={() => setIsActive((isActive) => !isActive)}
      >
        <p className={style.accordion__title}>{title}</p>
        <ChevronRightIcon
          className={classNames(style.accordion__icon, {
            [style["accordion__icon--rotate"]]: isActive,
          })}
        />
      </div>
      <div
        className={classNames(style.accordion__content, {
          [style["accordion__content--active"]]: isActive,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
