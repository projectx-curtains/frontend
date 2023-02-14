import { useState } from "react";
import { useFormikContext, FormikValues } from "formik";
import WindowStep from "../components";
import { WindowTypeEnum, WindowQuantityEnum } from "../types";

const WindowStepContainer = () => {
  const { values, setValues } = useFormikContext<FormikValues>();
  const [isTypeEmpty, setIsTypeEmpty] = useState(!values.typeWindow);
  const [isDistanceDisabled, setIsDistanceDisabled] = useState(
    values.quantityWindow === WindowQuantityEnum.single
  );
  const [isTripleLeaf, setIsTripleLeaf] = useState(false);

  const getImagePath = (): string => {
    const { singleLeaf, doubleLeaf, tripleLeaf } = WindowTypeEnum;
    const { single, double } = WindowQuantityEnum;

    switch (values.typeWindow) {
      case singleLeaf:
        return values.quantityWindow === single
          ? `${singleLeaf}-${single}.png`
          : `${singleLeaf}-${double}.png`;
      case doubleLeaf:
        return values.quantityWindow === single
          ? `${doubleLeaf}-${single}.png`
          : `${doubleLeaf}-${double}.png`;
      case tripleLeaf:
        return `${tripleLeaf}-${single}.png`;
      default:
        return `${doubleLeaf}-${double}.png`;
    }
  };

  const handleSelectOptions = (e: React.MouseEventHandler<HTMLLIElement>) => {
    const { value } = e.target.dataset;
    //If no value in select disable all inputs
    const isEmptyType = !!value;
    setIsTypeEmpty(!isEmptyType);

    //If window is tripleleaf hide distance input and disable radiobuttons
    if (value === WindowTypeEnum.tripleLeaf) {
      setIsDistanceDisabled(true);
      setIsTripleLeaf(true);
      setValues({ ...values, quantityWindow: WindowQuantityEnum.single }); // change quantity to 1 when it is tripleleaf window
    } else {
      setIsTripleLeaf(false);
    }
  };

  const handleRadioButtonOptions = (e: React.FormEvent<HTMLFormElement>) => {
    const { value } = e.target;

    const isSingleWindow = value === WindowQuantityEnum.single;
    setIsDistanceDisabled(isSingleWindow);
  };

  return (
    <WindowStep
      isTypeEmpty={isTypeEmpty}
      isDistanceDisabled={isDistanceDisabled}
      isTripleLeaf={isTripleLeaf}
      getImagePath={getImagePath}
      handleSelectOptions={handleSelectOptions}
      handleRadioButtonOptions={handleRadioButtonOptions}
    />
  );
};

export default WindowStepContainer;
