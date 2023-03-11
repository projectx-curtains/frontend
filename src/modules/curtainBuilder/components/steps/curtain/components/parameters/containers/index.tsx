import { useState } from "react";
import { FormikValues, useFormikContext } from "formik";
import Parameters from "../components";
import { IParametersContainer } from "../interfaces";
import { CurtainTypeEnum } from "../../../types";

const ParametersContainer: React.FC<IParametersContainer> = ({
  isChosenCurtain,
  setCurtain,
}) => {
  const { values, setValues } = useFormikContext<FormikValues>();
  const [canQuantityChange, setCanQuantityChange] = useState(true);

  const handleSelectOptionsType = (
    e: React.MouseEventHandler<HTMLLIElement>
  ) => {
    const { value } = e.target.dataset;
    setCurtain(value);

    //Quantity is changing only for classic and curtains
    if (value === (CurtainTypeEnum.classic || CurtainTypeEnum.thread)) {
      setCanQuantityChange(true);
    }
  };

  return (
    <Parameters
      isTypeEmpty={!isChosenCurtain}
      isQuantityDisabled={!canQuantityChange}
      handleSelectOptionsType={handleSelectOptionsType}
    />
  );
};

export default ParametersContainer;
