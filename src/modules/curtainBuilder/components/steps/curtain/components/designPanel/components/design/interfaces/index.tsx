import {
  ChosenColorsType,
  TabsEnum,
} from "@modules/curtainBuilder/components/steps/curtain/types";

export interface IDesignContainer {
  setChosenTab: React.Dispatch<React.SetStateAction<TabsEnum>>;
  chosenColors: Array<ChosenColorsType>;
  setChosenColors: React.Dispatch<React.SetStateAction<ChosenColorsType[]>>;
  setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface IDesign {
  chosenColors: Array<ChosenColorsType>;
  handleColorEdit: (colorIndex: number) => void;
  handleSelectDesign: (e: React.MouseEventHandler<HTMLLIElement>) => void;
  handleSelectSectionQuantity: (
    e: React.MouseEventHandler<HTMLLIElement>
  ) => void;
  isCombined: boolean;
  isDesignNotEmpty: boolean;
}
