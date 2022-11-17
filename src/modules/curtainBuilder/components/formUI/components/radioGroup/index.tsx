import { FieldConfig, useField } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import style from "../../styles/radio.module.scss";

interface IRadioGroupContainer extends FieldConfig {
  defaultValue: string;
  content: any;
  handleRadioButtonOptions: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
}

const RadioGroupContainer: React.FC<IRadioGroupContainer> = ({
  content,
  handleRadioButtonOptions,
  disabled,
  ...props
}) => {
  const [field] = useField(props.name);

  console.log("radio", field.value);
  return (
    <RadioGroup {...field} {...props} className={style["radio-group"]}>
      {content.map((quantityItem) => (
        <FormControlLabel
          key={quantityItem.name}
          value={quantityItem.value}
          control={<Radio className={style["radio-group__option-wrapper"]} />}
          label={quantityItem.name}
          className={style["radio-group__option"]}
          onClick={handleRadioButtonOptions}
          disabled={disabled}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioGroupContainer;
