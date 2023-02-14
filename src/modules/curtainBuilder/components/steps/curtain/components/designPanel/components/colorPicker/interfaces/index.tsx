import { TabsEnum } from "@modules/curtainBuilder/components/steps/curtain/types";
import { TooltipPlacement } from "../types";

export interface IColorPickerContainer {
  setChosenTab: React.Dispatch<React.SetStateAction<TabsEnum>>;
  setChosenColors: React.Dispatch<React.SetStateAction<string[]>>;
  colorIndex: number;
}

export interface IColorPicker {
  getTooltipPlacement: (x: number, y: number) => TooltipPlacement;
  handleColorButton: (color: string) => void;
}
