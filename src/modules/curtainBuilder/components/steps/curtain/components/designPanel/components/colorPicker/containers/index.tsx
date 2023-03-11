import { useState } from "react";
import ColorPicker from "../components";
import { IColorPickerContainer } from "../interfaces";
import { TooltipPlacement } from "../types";
import { TabsEnum } from "@modules/curtainBuilder/components/steps/curtain/types";
import { COLORS } from "../constants";

const ColorPickerContainer: React.FC<IColorPickerContainer> = ({
  setChosenTab,
  setChosenColors,
  colorIndex,
}) => {
  const [itemOpened, setItemOpened] = useState<string>("");
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

  const handleTooltipOnOpen = (e: React.SyntheticEvent) => {
    setItemOpened(e.target.ariaLabel);
    setTimeout(() => {
      setItemOpened("");
    }, 1000);
  };

  const handleColorButton = (color: string, title: string) => {
    setChosenColors((chosenColors) => {
      chosenColors[colorIndex] = { color, title };
      return [...chosenColors];
    });
    setChosenTab((chosenTab) => (chosenTab = TabsEnum.design));
  };

  return (
    <ColorPicker
      getTooltipPlacement={getTooltipPlacement}
      itemOpened={itemOpened}
      handleTooltipOnOpen={handleTooltipOnOpen}
      handleColorButton={handleColorButton}
    />
  );
};

export default ColorPickerContainer;
