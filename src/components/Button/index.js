import React from "react";

const Arrow = ({ className, color = "" }) => (
  <svg
    className={className}
    width="13"
    height="20"
    viewBox="0 0 13 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5098 1.8701L10.7298 0.100098L0.839844 10.0001L10.7398 19.9001L12.5098 18.1301L4.37984 10.0001L12.5098 1.8701Z"
      fill={color}
    />
  </svg>
);

const Button = ({
  children,
  type = "",
  onClick,
  className = "",
  arrowLeft,
  arrowRight,
}) => {
  return (
    <button className={`button button--${type} ${className}`} onClick={onClick}>
      {arrowLeft && <Arrow className="button-arrow" />}
      {children}
      {arrowRight && <Arrow className="button-arrow button__arrow-right" />}
    </button>
  );
};

export default Button;
