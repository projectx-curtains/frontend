import SaveEraseButtons from "../components";

const SaveEraseButtonsContainers = () => {
  const clickSaveButton = () => {};
  const clickEraseButton = () => {};

  const props = {
    clickSaveButton,
    clickEraseButton,
  };
  return <SaveEraseButtons {...props} />;
};

export default SaveEraseButtonsContainers;
