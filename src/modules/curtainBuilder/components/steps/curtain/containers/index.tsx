import { useState } from "react";
import { FormikValues, useFormikContext } from "formik";
import CurtainStep from "../components";
import { ChosenColorsType, TabsEnum } from "../types";

const CurtainStepContainer = () => {
  const formik = useFormikContext<FormikValues>();
  const {
    widthCurtain,
    heightCurtain,
    quantityCurtain,
    typeCurtain,
    materialCurtain,
  } = formik.errors;
  const isParametersPanelValid = !(
    !!widthCurtain ||
    !!heightCurtain ||
    !!quantityCurtain ||
    !!typeCurtain ||
    !!materialCurtain
  );

  const [chosenColors, setChosenColors] = useState<Array<ChosenColorsType>>([]);
  const [chosenTab, setChosenTab] = useState<number>(TabsEnum.parameters);
  const [curtain, setCurtain] = useState<string>("");

  return (
    <CurtainStep
      chosenTab={chosenTab}
      setChosenTab={setChosenTab}
      curtain={curtain}
      setCurtain={setCurtain}
      isParametersPanelValid={isParametersPanelValid}
      chosenColors={chosenColors}
      setChosenColors={setChosenColors}
    />
  );
};

export default CurtainStepContainer;
