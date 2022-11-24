import React from "react";
import { WindowStep } from "../../steps/window";
import { CorniceStep } from "../../steps/cornice";
import TulleStep from "../../steps/tulle";
import CurtainStep from "../../steps/curtain";
import CheckoutStep from "../../steps/checkout";
import { MultiStepForm } from "./multiStepForm";
import { FormStepContainer } from "./multiStepForm/containers/FormStepContainer";
import { IBuilderProps } from "../interfaces";
import { initialValues } from "../constants/initialValues";
import { windowValidationSchema, corniceValidationSchema } from "../validation";

const Builder: React.FC<IBuilderProps> = ({
  isTulleDisplayed,
  isCurtainDisplayed,
}) => {
  return (
    <div className="container">
      <MultiStepForm
        initialValues={{ initialValues }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormStepContainer
          stepName="Выбор параметров окна"
          validationSchema={windowValidationSchema}
        >
          <WindowStep />
        </FormStepContainer>
        <FormStepContainer
          stepName="Выбор параметров карниза"
          validationSchema={corniceValidationSchema}
        >
          <CorniceStep />
        </FormStepContainer>
        {isTulleDisplayed && (
          <FormStepContainer
            stepName="Выбор параметров тюля"
            validationSchema={null}
          >
            <TulleStep />
          </FormStepContainer>
        )}
        {isCurtainDisplayed && (
          <FormStepContainer
            stepName="Выбор параметров портьер"
            validationSchema={null}
          >
            <CurtainStep />
          </FormStepContainer>
        )}
        <FormStepContainer stepName="Оформление заказа" validationSchema={null}>
          <CheckoutStep />
        </FormStepContainer>
      </MultiStepForm>
    </div>
  );
};

export default Builder;
