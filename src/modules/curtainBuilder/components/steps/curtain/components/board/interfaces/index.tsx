import { ChosenColorsType } from "../../../types";

export interface IBoard {
  svgRef?: React.LegacyRef<SVGSVGElement>;
  curtain: string;
  ceilingCornice: string;
  sectionQuantity: number;
  isSingleCurtain: boolean;
  getBackgroungPath: () => string;
  getCurtainPath: () => string;
  curtainBackgroundPath: string;
  curtainImageDimensions: ImageDimensionsType;
  typeWindow: string;
  quantityWindow: string;
}

export interface IBoardContainer {
  curtain: string;
  chosenColors: Array<ChosenColorsType>;
}

export interface ICurtainPart {
  side: string;
  sectionQuantity: number;
  curtainBackgroundPath: string;
}

export type ImageDimensionsType = { width: number; height: number };

export type LoadImageType = (
  setImageDimensions: React.Dispatch<React.SetStateAction<ImageDimensionsType>>,
  imageUrl: string
) => void;

export type UseCurtainImageWidthType = (
  width: number,
  curtainName: string,
  isSingleCurtain: boolean,
  typeWindow: string,
  quantityWindow: string
) => number;

export type CorniceWidthType = { [propKey: string]: number };
