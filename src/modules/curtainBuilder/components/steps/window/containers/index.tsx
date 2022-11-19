import { useState } from "react";
import { useFormikContext, FormikValues } from "formik";
import WindowStep from "../components";
import { WindowTypeEnum, WindowQuantityEnum } from "../types";

const WindowStepContainer = () => {
  const { values, setValues } = useFormikContext<FormikValues>();
  const [isTypeEmpty, setIsTypeEmpty] = useState(!values.type);
  const [isDistanceDisabled, setIsDistanceDisabled] = useState(
    values.quantity === WindowQuantityEnum.single
  );
  const [isTripleLeaf, setIsTripleLeaf] = useState(false);

  console.log(values);

  const getImagePath = (): string => {
    const { singleLeaf, doubleLeaf, tripleLeaf } = WindowTypeEnum;
    const { single, double } = WindowQuantityEnum;

    switch (values.type) {
      case singleLeaf:
        return values.quantity === single
          ? `${singleLeaf}-${single}.png`
          : `${singleLeaf}-${double}.png`;
      case doubleLeaf:
        return values.quantity === single
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
    if (!value) {
      setIsTypeEmpty(true);
    } else {
      setIsTypeEmpty(false);
    }

    //If window is tripleleaf hide distance input and disable radiobuttons
    if (value === WindowTypeEnum.tripleLeaf) {
      setIsDistanceDisabled(true);
      setIsTripleLeaf(true);
      setValues({ ...values, quantity: WindowQuantityEnum.single }); // change quantity to 1 when it is tripleleaf window
    } else {
      // setIsDistanceDisabled(false);
      setIsTripleLeaf(false);
    }
  };

  const handleRadioButtonOptions = (e: React.FormEvent<HTMLFormElement>) => {
    const { value } = e.target;

    if (value === WindowQuantityEnum.single) {
      setIsDistanceDisabled(true);
    } else {
      setIsDistanceDisabled(false);
    }
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
