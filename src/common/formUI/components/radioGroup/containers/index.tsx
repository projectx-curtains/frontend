import { useEffect } from "react";
import { useField } from "formik";
import RadioGroupField from "../components";
import { IRadioGroupFieldContainer } from "../interfaces";

const RadioGroupFieldContainer: React.FC<IRadioGroupFieldContainer> = ({
  content,
  handleRadioButtonOptions,
  disabled,
  ...props
}) => {
  const { name, defaultValue } = props;
  const [field, , helpers] = useField(name);

  useEffect(() => {
    helpers.setValue(defaultValue);
  }, [helpers, defaultValue]);

  return (
    <RadioGroupField
      field={field}
      content={content}
      handleRadioButtonOptions={handleRadioButtonOptions}
      disabled={disabled}
      {...props}
    />
  );
};

export default RadioGroupFieldContainer;
