import Panel from "../../panel";
import { ColorPicker } from "./colorPicker";
import { Design } from "./design";
import { IDesignPanel } from "../interfaces";
import { TabsEnum } from "../../../types";

const DesignPanel: React.FC<IDesignPanel> = ({
  chosenTab,
  setChosenTab,
  chosenColors,
  setChosenColors,
  colorIndex,
  setColorIndex,
}) => {
  return (
    <>
      <Panel chosenTab={chosenTab} value={TabsEnum.design}>
        <Design
          setChosenTab={setChosenTab}
          setChosenColors={setChosenColors}
          chosenColors={chosenColors}
          setColorIndex={setColorIndex}
        />
      </Panel>
      <Panel chosenTab={chosenTab} value={TabsEnum.colorPicker}>
        <ColorPicker
          setChosenTab={setChosenTab}
          setChosenColors={setChosenColors}
          colorIndex={colorIndex}
        />
      </Panel>
    </>
  );
};

export default DesignPanel;
