import { CorniceTypeEnum } from "./../../steps/cornice/types/index";
import { WindowQuantityEnum } from "../../steps/window/types";

export const initialValues = {
  typeWindow: "",
  quantityWindow: WindowQuantityEnum.double,
  widthWindow: 0,
  heightWindow: 0,
  distanceWindow: 0,
  typeCornice: CorniceTypeEnum.ceiling,
  widthCornice: 0,
  widthCurtain: 0,
  heightCurtain: 0,
  quantityCurtain: 0,
  typeCurtain: "",
  materialCurtain: "",
  designCurtain: "",
  // sectionDirectionCurtain: "",
  // sectionQuantityCurtain: "",
  // colorCurtain: [],
};
