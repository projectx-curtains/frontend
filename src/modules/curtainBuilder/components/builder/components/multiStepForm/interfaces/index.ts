import { FormikConfig, FormikHelpers, FormikValues } from "formik";

export interface IMultiStepFormContainer extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}

export interface IMultiStepForm {
  step: React.ReactElement;
  steps: Array<React.ReactElement>;
  stepNumber: number;
  isLastStep: boolean;
  snapshot: object;
  handleSubmit: (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => void;
  previousStep: (values: FormikValues) => void;
}

export interface IFormStepContainer {
  stepName: string;
  children: React.ReactElement;
  validationSchema: object;
}
