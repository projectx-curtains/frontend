import { useState } from "react";
import BuilderStarter from "@common/curtainBuilder/components/builderStarter/components";
import Builder from "@common/curtainBuilder/components/builder/components";
import { StepsOptionType, StepsType } from "@common/curtainBuilder/types";
import { BUILDER_OPTIONS } from "@common/curtainBuilder/constants";

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
        <BuilderStarter
          handleStartBuilder={handleStartBuilder}
          setChosenOption={setChosenOption}
        />
      )}
    </>
  );
};

export default CurtainBuilderModule;
