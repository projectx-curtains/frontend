import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const LinkButton = ({
  children,
  onClick,
  className = "",
  link,
  arrowLeft,
  arrowRight,
}) => {
  return (
    <Link to={link} className={`button ${className}`} onClick={onClick}>
      {arrowLeft && (
        <MdKeyboardArrowLeft className="button__icon button__icon--left" />
      )}
      {children}
      {arrowRight && (
        <MdKeyboardArrowRight className="button__icon button__icon--right" />
      )}
    </Link>
  );
};

export default LinkButton;
