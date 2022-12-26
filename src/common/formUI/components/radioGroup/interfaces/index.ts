import { FieldConfig, FieldInputProps } from "formik";
import { RadioOrSelectType } from "../../../types";

export interface IRadioGroupFieldContainer extends FieldConfig {
  defaultValue: string;
  content: Array<RadioOrSelectType>;
  handleRadioButtonOptions?: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
}

export interface IRadioGroupField extends FieldConfig {
  field: FieldInputProps<any>;
  defaultValue: string;
  content: Array<RadioOrSelectType>;
  handleRadioButtonOptions?: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
}
