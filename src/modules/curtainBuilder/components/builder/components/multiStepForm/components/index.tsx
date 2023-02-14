import React from "react";
import { Formik } from "formik";
import FormNavigation from "../../formNavigation/components";
import CustomStepper from "../../stepper/components";
import { IMultiStepForm } from "../interfaces";

const MultiStepForm: React.FC<IMultiStepForm> = ({
  step,
  steps,
  stepNumber,
  isLastStep,
  snapshot,
  handleSubmit,
  previousStep,
}) => {
  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
      //validateOnMount
      validateOnChange>
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <CustomStepper
            activeStep={stepNumber}
            steps={steps}
          />

          {step}

          <FormNavigation
            isLastStep={isLastStep}
            hasPrevious={stepNumber > 0}
            onBackClick={() => previousStep(formik.values)}
            disableNext={
              !formik.isValid ||
              Object.values(formik.values).every((value) => value == true)
            }
          />
        </form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
