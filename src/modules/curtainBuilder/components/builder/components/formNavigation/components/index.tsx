import React from "react";
import classNames from "classnames";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IFormNavigation } from "../intefaces";
import style from "../styles/formNav.module.scss";

const FormNavigation: React.FC<IFormNavigation> = ({
  onBackClick,
  hasPrevious,
  disableNext,
  isLastStep,
}) => {
  return (
    <div className={style["form-nav"]}>
      {hasPrevious && (
        <Button
          className={classNames("button--primary", style["form-nav__button"])}
          type="button"
          onClick={onBackClick}
        >
          <KeyboardArrowLeftIcon
            className={classNames(
              "button__icon",
              style["gallery-container__button__icon"]
            )}
          />
          Назад
        </Button>
      )}
      <Button
        className={classNames("button--primary", style["form-nav__button"])}
        type="submit"
        disabled={disableNext}
      >
        {isLastStep ? "Заказать" : "Далее"}
        <KeyboardArrowRightIcon
          className={classNames(
            "button__icon",
            style["gallery-container__button__icon"]
          )}
        />
      </Button>
    </div>
  );
};

export default FormNavigation;
