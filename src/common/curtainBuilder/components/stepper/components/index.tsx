import React from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import DoneIcon from "@mui/icons-material/Done";
import { StepIconProps } from "@mui/material/StepIcon";
import { ISteps } from "../intefaces";
import style from "../styles/steps.module.scss";

const StepperContainer: React.FC<ISteps> = ({ activeStep, steps }) => {
  let stepNum = 0;

  function CustomStepIcon(props: StepIconProps) {
    const { completed, className } = props;

    stepNum++;
    return (
      <div className={className}>
        {completed ? (
          <DoneIcon className="QontoStepIcon-completedIcon" />
        ) : (
          <span>{stepNum}</span>
        )}
      </div>
    );
  }

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

export default StepperContainer;
