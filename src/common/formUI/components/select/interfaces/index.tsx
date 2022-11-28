import { FieldConfig } from "formik";
import { RadioOrSelectType } from "../../../types";

export interface ISelectField extends FieldConfig {
  content: Array<RadioOrSelectType>;
  handleSelectOptions: (e: React.MouseEventHandler<HTMLLIElement>) => void;
  defaultValue: string;
}
