import { useState } from "react";
import { FormikValues, useFormikContext } from "formik";
import Design from "../components";
import { IDesignContainer } from "../interfaces";
import { CurtainDesign } from "../types";
import { TabsEnum } from "@modules/curtainBuilder/components/steps/curtain/types";

const DesignContainer: React.FC<IDesignContainer> = ({
  setChosenTab,
  chosenColors,
  setChosenColors,
  setColorIndex,
}) => {
  const { values, setValues } = useFormikContext<FormikValues>();
  // const [isCombined, setIsCombined] = useState(
  //   values.designCurtain === CurtainDesign.combined
  // );

  const populateChosenColorsArray = (numberOfColors: number) => {
    //console.log([...Array(numberOfColors)]);
    //return [...Array(numberOfColors)].map(() => "white");
    return Array.from({ length: numberOfColors }, () => "white");
  };

  const handleSelectDesign = (e: React.MouseEventHandler<HTMLLIElement>) => {
    const { value } = e.target.dataset;

    // setIsCombined(
    //   (isCombined) => (isCombined = value === CurtainDesign.combined)
    // );
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
    console.log(value);
    setChosenColors(() => populateChosenColorsArray(value));
    //console.log(chosenColors);
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
    />
  );
};

export default DesignContainer;
