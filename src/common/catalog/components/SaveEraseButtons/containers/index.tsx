import SaveEraseButtons from "../components";

const SaveEraseButtonsContainers = ({ clickSaveButton, clickEraseButton }) => {
  // const clickSaveButton = () => {};
  // const clickEraseButton = () => {};

  const props = {
    clickSaveButton,
    clickEraseButton,
  };
  return <SaveEraseButtons {...props} />;
};

export default SaveEraseButtonsContainers;
