import React, { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../Button";
import { MdChevronRight } from "react-icons/md";

function Accordion({ children, title, onlyForMobile = false, className }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className={`accordion ${className}`}>
      {onlyForMobile && !isMobile ? (
        <>{children}</>
      ) : (
        <>
          <Button
            className={`accordion__button ${setActive}`}
            onClick={toggleAccordion}
          >
            <p className="accordion__title">{title}</p>
            <MdChevronRight className={`${setRotate}`} />
          </Button>
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="accordion__content"
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default Accordion;
