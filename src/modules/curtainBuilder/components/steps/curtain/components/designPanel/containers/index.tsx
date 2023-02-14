import { useState } from "react";
import DesignPanel from "../components";
import { IDesignPanelContainer } from "../interfaces";

const DesignPanelContainer: React.FC<IDesignPanelContainer> = ({
  chosenTab,
  setChosenTab,
  chosenColors,
  setChosenColors,
}) => {
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <DesignPanel
      chosenTab={chosenTab}
      setChosenTab={setChosenTab}
      chosenColors={chosenColors}
      setChosenColors={setChosenColors}
      colorIndex={colorIndex}
      setColorIndex={setColorIndex}
    />
  );
};

export default DesignPanelContainer;
