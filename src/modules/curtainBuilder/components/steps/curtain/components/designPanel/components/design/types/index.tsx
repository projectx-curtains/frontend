import { ChosenColorsType } from "@modules/curtainBuilder/components/steps/curtain/types";

export enum CurtainDesign {
  solid = "Однотонные",
  pattern = "Рисунок",
  embroidery = "Вышивка",
  combined = "Комбинированные",
}

export type CurtainColorDesignType = {
  chosenColor: ChosenColorsType;
  colorIndex: number;
};

export enum CurtainQuantityEnum {
  two = 2,
  three = 3,
  four = 4,
}
