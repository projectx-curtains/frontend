import React from "react";
import { WindowStep } from "../../steps/window";
import CorniceStep from "../../steps/cornice";
import TulleStep from "../../steps/tulle";
import CurtainStep from "../../steps/curtain";
import CheckoutStep from "../../steps/checkout";
import { MultiStepForm } from "./multiStepForm";
import { FormStep } from "./multiStepForm/components/FormStep";
import { IBuilderProps } from "../interfaces";
import { initialValues } from "../constants/initialValues";
import { windowValidationSchema } from "../validation";

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
        <FormStep
          stepName="Выбор параметров окна"
          onSubmit={() => console.log("Step1 submit")}
          validationSchema={windowValidationSchema}
        >
          <WindowStep />
        </FormStep>
        <FormStep
          stepName="Выбор параметров карниза"
          onSubmit={() => console.log("Step2 submit")}
          validationSchema={null}
        >
          <CorniceStep />
        </FormStep>
        {isTulleDisplayed && (
          <FormStep
            stepName="Выбор параметров тюля"
            onSubmit={() => console.log("Step3 submit")}
            validationSchema={null}
          >
            <TulleStep />
          </FormStep>
        )}
        {isCurtainDisplayed && (
          <FormStep
            stepName="Выбор параметров портьер"
            onSubmit={() => console.log("Step4 submit")}
            validationSchema={null}
          >
            <CurtainStep />
          </FormStep>
        )}
        <FormStep
          stepName="Оформление заказа"
          onSubmit={() => console.log("Step5 submit")}
          validationSchema={null}
        >
          <CheckoutStep />
        </FormStep>
      </MultiStepForm>
    </div>
  );
};

export default Builder;
