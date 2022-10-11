import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Button = ({
  children,
  type = "",
  onClick,
  className = "",
  arrowLeft,
  arrowRight,
}) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {arrowLeft && (
        <MdKeyboardArrowLeft className="button__icon button__icon--left" />
      )}
      {children}
      {arrowRight && (
        <MdKeyboardArrowRight className="button__icon button__icon--right" />
      )}
    </button>
  );
};

export default Button;
