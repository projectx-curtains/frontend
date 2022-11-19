import { useState } from "react";
import { BuilderStartPage } from "./components/builderStartPage";
import { Builder } from "./components/builder";
import { StepsOptionType } from "./types";
import { BUILDER_OPTIONS } from "./constants";

const CurtainBuilderModule = () => {
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
    <>
      {isTulleDisplayed || isCurtainDisplayed ? (
        <Builder
          isTulleDisplayed={isTulleDisplayed}
          isCurtainDisplayed={isCurtainDisplayed}
        />
      ) : (
        <BuilderStartPage
          handleStartBuilder={handleStartBuilder}
          setChosenOption={setChosenOption}
        />
      )}
    </>
  );
};

export default CurtainBuilderModule;
