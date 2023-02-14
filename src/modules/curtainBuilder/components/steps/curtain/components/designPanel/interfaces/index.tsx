import { TabsEnum } from "../../../types";

export interface IDesignPanel {
  chosenTab: number;
  setChosenTab: React.Dispatch<React.SetStateAction<TabsEnum>>;
  chosenColors: Array<string>;
  setChosenColors: React.Dispatch<React.SetStateAction<string[]>>;
  colorIndex: number;
  setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface IDesignPanelContainer {
  chosenTab: number;
  setChosenTab: React.Dispatch<React.SetStateAction<TabsEnum>>;
  chosenColors: Array<string>;
  setChosenColors: React.Dispatch<React.SetStateAction<string[]>>;
}
