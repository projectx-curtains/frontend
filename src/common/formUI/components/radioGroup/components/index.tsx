import { useField } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { IRadioGroupField } from "../interfaces";
import { RadioOrSelectType } from "../../../types";
import style from "../styles/radio.module.scss";

const RadioGroupField: React.FC<IRadioGroupField> = ({
  content,
  handleRadioButtonOptions,
  disabled,
  ...props
}) => {
  const [field] = useField(props.name);

  return (
    <RadioGroup
      {...field}
      {...props}
      value={field.value || props.defaultValue}
      className={style["radio-group"]}
    >
      {content.map(({ name, value }: RadioOrSelectType) => (
        <FormControlLabel
          key={name}
          value={value}
          control={<Radio className={style["radio-group__option-wrapper"]} />}
          label={name}
          className={style["radio-group__option"]}
          onClick={handleRadioButtonOptions}
          disabled={disabled}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioGroupField;
