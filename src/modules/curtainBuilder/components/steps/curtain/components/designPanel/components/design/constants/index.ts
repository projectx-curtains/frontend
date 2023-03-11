import { CurtainDesign, CurtainQuantityEnum } from "../types";

export const CURTAIN_DESIGN = [
  {
    name: CurtainDesign.solid,
  },
  {
    name: CurtainDesign.pattern,
  },
  {
    name: CurtainDesign.embroidery,
  },
  {
    name: CurtainDesign.combined,
  },
];

export const SECTION_DIRECTION = [
  {
    name: "Горизонтальное",
    value: "horizontal",
  },
  {
    name: "Вертикальное",
    value: "vertical",
  },
];

export const SECTION_QUANTITY = [
  {
    name: "2 цвета",
    value: CurtainQuantityEnum.two,
  },
  {
    name: "3 цвета",
    value: CurtainQuantityEnum.three,
  },
];
