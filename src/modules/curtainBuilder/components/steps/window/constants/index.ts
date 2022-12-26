import { WindowTypeEnum, WindowQuantityEnum } from "../types";

export const WINDOW_TYPE = [
  {
    name: "Одностворчатое",
    value: WindowTypeEnum.singleLeaf,
  },
  {
    name: "Двухстворчатое",
    value: WindowTypeEnum.doubleLeaf,
  },
  {
    name: "Трехстворчатое",
    value: WindowTypeEnum.tripleLeaf,
  },
];

export const WINDOW_QUANTITY = [
  {
    name: "1 окно",
    value: WindowQuantityEnum.single,
  },
  {
    name: "2 окна",
    value: WindowQuantityEnum.double,
  },
];
