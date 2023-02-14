import Parameters from "../components";

const ParametersContainer = ({ isChosenCurtain, setCurtain }) => {
  const handleSelectOptionsType = (
    e: React.MouseEventHandler<HTMLLIElement>
  ) => {
    const { value } = e.target.dataset;
    setCurtain(value);
  };

  return (
    <Parameters
      isTypeEmpty={!isChosenCurtain}
      handleSelectOptionsType={handleSelectOptionsType}
    />
  );
};

export default ParametersContainer;
