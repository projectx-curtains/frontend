import BuilderStartPage from "../components";
import { IBuilderStartPageContainer } from "../interfaces";

const BuilderStartPageContainer: React.FC<IBuilderStartPageContainer> = ({
  handleStartBuilder,
  setChosenOption,
}) => {
  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setChosenOption(event.target.value);
  };

  return (
    <BuilderStartPage
      handleStartBuilder={handleStartBuilder}
      handleRadioChange={handleRadioChange}
    />
  );
};

export default BuilderStartPageContainer;
