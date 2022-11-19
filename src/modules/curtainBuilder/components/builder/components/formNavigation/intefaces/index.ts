import { FormikValues } from "formik";

export interface IFormNavigation {
  hasPrevious?: boolean;
  onBackClick: (values: FormikValues) => void;
  isLastStep: boolean;
  disableNext: boolean;
}
