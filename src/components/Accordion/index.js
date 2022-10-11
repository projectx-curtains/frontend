import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";

var classNames = require("classnames");

function Accordion({ children, title, className }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`accordion ${className}`}>
      <div
        className="accordion__button"
        onClick={() => setIsActive((isActive) => !isActive)}
      >
        <p className="accordion__title">{title}</p>
        <MdChevronRight
          className={classNames("accordion__icon", {
            "accordion__icon--rotate": isActive,
          })}
        />
      </div>
      <div
        className={classNames("accordion__content", {
          "accordion__content--active": isActive,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
