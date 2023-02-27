import { FormikContextType } from "formik";

export interface ICartModuleProps {
  formik: FormikContextType<any>;
  onAdd: () => void;
  onReduct: () => void;
}
