import { FormikContextType } from "formik";

export interface IFeedbackFormProps {
  formik: FormikContextType<any>;
  commentValue: string;
  handleChange: () => void;
}
