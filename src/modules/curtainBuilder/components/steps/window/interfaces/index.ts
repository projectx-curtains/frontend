import { StepsType } from "@common/curtainBuilder/types";
import { WindowQuantityEnum, WindowTypeEnum } from "../types";

export interface IWindowStep {
  steps: Array<StepsType>;
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
}

export interface IBoard {
  type: string;
  quantity: number;
}
