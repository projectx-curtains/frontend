import { ChosenColorsType, TabsEnum } from "../../../types";

export interface IDesignPanel {
  chosenTab: number;
  setChosenTab: React.Dispatch<React.SetStateAction<TabsEnum>>;
  chosenColors: Array<ChosenColorsType>;
  setChosenColors: React.Dispatch<React.SetStateAction<ChosenColorsType[]>>;
  colorIndex: number;
  setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface IDesignPanelContainer {
  chosenTab: number;
  setChosenTab: React.Dispatch<React.SetStateAction<TabsEnum>>;
  chosenColors: Array<ChosenColorsType>;
  setChosenColors: React.Dispatch<React.SetStateAction<ChosenColorsType[]>>;
}
