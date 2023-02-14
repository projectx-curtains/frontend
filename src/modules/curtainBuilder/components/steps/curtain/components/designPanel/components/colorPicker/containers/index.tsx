import ColorPicker from "../components";
import { IColorPickerContainer } from "../interfaces";
import { TooltipPlacement } from "../types";
import { COLORS } from "../constants";
import { TabsEnum } from "@modules/curtainBuilder/components/steps/curtain/types";

const ColorPickerContainer: React.FC<IColorPickerContainer> = ({
  setChosenTab,
  setChosenColors,
  colorIndex,
}) => {
  const centerY = COLORS.length / 2;
  const centerX = COLORS[0].tints.length / 2;

  const getTooltipPlacement = (x: number, y: number): TooltipPlacement => {
    switch (true) {
      case x < centerX && y < centerY:
        return "bottom-start";
      case x >= centerX && y < centerY:
        return "bottom-end";
      case x < centerX && y >= centerY:
        return "top-start";
      case x >= centerX && y >= centerY:
        return "top-end";
      default:
        return "bottom-end";
    }
  };

  const handleColorButton = (color: string) => {
    setChosenColors((chosenColors) => {
      chosenColors[colorIndex] = color;
      return [...chosenColors];
    });
    setChosenTab((chosenTab) => (chosenTab = TabsEnum.design));
  };

  return (
    <ColorPicker
      handleColorButton={handleColorButton}
      getTooltipPlacement={getTooltipPlacement}
    />
  );
};

export default ColorPickerContainer;
