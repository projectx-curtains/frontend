import OutlinedInput from "@mui/material/OutlinedInput";
import { FieldConfig, useField } from "formik";
import style from "../../styles/input.module.scss";

interface IInputField extends FieldConfig {
  disabled?: boolean;
}

const InputField: React.FC<IInputField> = ({ disabled, ...props }) => {
  const [field, meta] = useField({ name: props.name, type: "number" });

  return (
    <>
      <OutlinedInput
        type="number"
        {...field}
        value={field.value}
        {...props}
        disabled={disabled}
        placeholder="0"
        className={style.input}
        error={meta.touched && Boolean(meta.error)}
      />
      {meta.touched && Boolean(meta.error) && (
        <div className={style.input__error}>{meta.error}</div>
      )}
    </>
  );
};

export default InputField;
