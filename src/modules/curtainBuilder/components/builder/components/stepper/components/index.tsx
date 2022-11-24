import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CustomStepIcon from "./customStepIcon";
import { ICustomStepper } from "../interfaces";
import style from "../styles/steps.module.scss";

const CustomStepper: React.FC<ICustomStepper> = ({ activeStep, steps }) => {
  return (
    <Stepper alternativeLabel activeStep={activeStep} className={style.stepper}>
      {steps.map((currentStep) => {
        const label = currentStep.props.stepName;
        return (
          <Step key={label} className={style.stepper__step}>
            <StepLabel
              StepIconComponent={CustomStepIcon}
              className={style.stepper__label}
            >
              {label}
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default CustomStepper;
