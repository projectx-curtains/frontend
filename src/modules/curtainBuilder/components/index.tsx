import { BuilderStartPage } from "../components/builderStartPage";
import { Builder } from "../components/builder";
import { ICurtainBuilderModule } from "../interfaces";

const CurtainBuilderModule: React.FC<ICurtainBuilderModule> = ({
  isTulleDisplayed,
  isCurtainDisplayed,
  handleStartBuilder,
  setChosenOption,
}) => {
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
