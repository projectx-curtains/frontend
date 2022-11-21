import { FieldConfig } from "formik";
import { RadioOrSelectType } from "../../../types";

export interface IRadioGroupField extends FieldConfig {
  defaultValue: string;
  content: Array<RadioOrSelectType>;
  handleRadioButtonOptions: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
}
