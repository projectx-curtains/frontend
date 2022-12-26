import { useState } from "react";
import CurtainBuilderModule from "../components";
import { StepsOptionType } from "../types";
import { BUILDER_OPTIONS } from "../constants";

const CurtainBuilderModuleContainer = () => {
  const [chosenOption, setChosenOption] = useState("");
  const [isTulleDisplayed, setIsTulleDisplayed] = useState(false);
  const [isCurtainDisplayed, setIsCurtainDisplayed] = useState(false);

  const handleStartBuilder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    BUILDER_OPTIONS.forEach((option: StepsOptionType) => {
      if (option.value === chosenOption) {
        setIsTulleDisplayed(option.tulle);
        setIsCurtainDisplayed(option.curtain);
      }
    });
  };

  return (
    <CurtainBuilderModule
      isTulleDisplayed={isTulleDisplayed}
      isCurtainDisplayed={isCurtainDisplayed}
      handleStartBuilder={handleStartBuilder}
      setChosenOption={setChosenOption}
    />
  );
};

export default CurtainBuilderModuleContainer;
