import { useState } from "react";
import { FormikValues, useFormikContext } from "formik";
import Design from "../components";
import { IDesignContainer } from "../interfaces";
import { CurtainDesign } from "../types";
import { TabsEnum } from "@modules/curtainBuilder/components/steps/curtain/types";
import { INITIAL_COLORSLOT_VALUE } from "@modules/curtainBuilder/components/steps/curtain/constants";

const DesignContainer: React.FC<IDesignContainer> = ({
  setChosenTab,
  chosenColors,
  setChosenColors,
  setColorIndex,
}) => {
  const { values, setValues } = useFormikContext<FormikValues>();
  const [isDesignNotEmpty, setIsDesignNotEmpty] = useState<boolean>(
    !!values.designCurtain
  );

  const populateChosenColorsArray = (numberOfColors: number) => {
    const newArray = [];
    for (let i = 0; i < numberOfColors; i++) {
      newArray.push(INITIAL_COLORSLOT_VALUE);
    }
    return newArray;
  };

  const handleSelectDesign = (e: React.MouseEventHandler<HTMLLIElement>) => {
    const { value } = e.target.dataset;

    setIsDesignNotEmpty(!!value);
    if (!(value === CurtainDesign.combined)) {
      setValues({
        ...values,
        sectionDirectionCurtain: "",
        sectionQuantityCurtain: "",
      });
      setChosenColors(() => populateChosenColorsArray(1));
    }
  };

  const handleSelectSectionQuantity = (
    e: React.MouseEventHandler<HTMLLIElement>
  ) => {
    const { value } = e.target.dataset;
    setChosenColors(() => populateChosenColorsArray(value));
  };

  const handleColorEdit = (colorIndex: number) => {
    setChosenTab((chosenTab) => (chosenTab = TabsEnum.colorPicker));
    setColorIndex(colorIndex);
  };

  return (
    <Design
      chosenColors={chosenColors}
      handleColorEdit={handleColorEdit}
      handleSelectDesign={handleSelectDesign}
      handleSelectSectionQuantity={handleSelectSectionQuantity}
      isCombined={values.designCurtain === CurtainDesign.combined}
      isDesignNotEmpty={isDesignNotEmpty}
    />
  );
};

export default DesignContainer;
