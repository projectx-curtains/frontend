import {
  ChosenColorsType,
  TabsEnum,
} from "@modules/curtainBuilder/components/steps/curtain/types";
import { TooltipPlacement } from "../types";

export interface IColorPickerContainer {
  setChosenTab: React.Dispatch<React.SetStateAction<TabsEnum>>;
  setChosenColors: React.Dispatch<
    React.SetStateAction<Array<ChosenColorsType>>
  >;
  colorIndex: number;
}

export interface IColorPicker {
  getTooltipPlacement: (x: number, y: number) => TooltipPlacement;
  itemOpened: string;
  handleTooltipOnOpen: (e: React.SyntheticEvent) => void;
  handleColorButton: (color: string, title: string) => void;
}
