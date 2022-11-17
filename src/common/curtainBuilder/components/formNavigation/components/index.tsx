import React from "react";
import classNames from "classnames";
import { FormikValues } from "formik";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import style from "../styles/formNav.module.scss";

interface Props {
  hasPrevious?: boolean;
  onBackClick: (values: FormikValues) => void;
  isLastStep: boolean;
  disableNext: boolean;
}

const FormNavigation: React.FC<Props> = (props) => {
  return (
    <div className={style["form-nav"]}>
      {props.hasPrevious && (
        <Button
          className={classNames("button--primary", style["form-nav__button"])}
          type="button"
          onClick={props.onBackClick}
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
        disabled={props.disableNext}
      >
        {props.isLastStep ? "Заказать" : "Далее"}
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
