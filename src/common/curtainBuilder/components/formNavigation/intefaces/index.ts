import { FormikConfig } from "formik";
import { StepsType } from "@common/curtainBuilder/types";
import { IWindowForm } from "../../steps/window/interfaces";

export interface IStepperButtons {
  formik: FormikConfig<IWindowForm>; //add other forms in generic
  steps: Array<StepsType>;
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
}
