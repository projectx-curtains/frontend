import React, { useState } from "react";

import Button from "../Button";
import { MdChevronRight } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

var classNames = require("classnames");

function Accordion({ children, title, onlyForMobile = false, className }) {
  const [isActive, setIsActive] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={`accordion ${className}`}>
      {onlyForMobile && !isMobile ? (
        <>{children}</>
      ) : (
        <>
          <Button
            className="accordion__button"
            onClick={() => setIsActive((isActive) => !isActive)}
          >
            <p className="accordion__title">{title}</p>
            <MdChevronRight
              className={classNames("accordion__icon", {
                "accordion__icon--rotate": isActive,
              })}
            />
          </Button>
          <div
            className={classNames("accordion__content", {
              "accordion__content--active": isActive,
            })}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default Accordion;
