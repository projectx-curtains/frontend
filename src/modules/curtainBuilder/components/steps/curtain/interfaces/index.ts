import { ChosenColorsType, TabsEnum } from "../types";

export interface ICurtainStep {
  chosenTab: number;
  setChosenTab: React.Dispatch<React.SetStateAction<TabsEnum>>;
  curtain: string;
  setCurtain: React.Dispatch<React.SetStateAction<string>>;
  isParametersPanelValid: boolean;
  chosenColors: Array<ChosenColorsType>;
  setChosenColors: React.Dispatch<
    React.SetStateAction<Array<ChosenColorsType>>
  >;
}

export interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
}
