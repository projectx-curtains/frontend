import { CurtainDesign } from "../types";

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
    value: 2,
  },
  {
    name: "3 цвета",
    value: 3,
  },
  {
    name: "Более 3-х цветов",
    value: 4,
  },
];
