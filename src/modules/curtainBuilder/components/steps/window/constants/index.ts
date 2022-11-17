import { WindowTypeEnum, WindowQuantityEnum } from "../types";

export const WINDOW_TYPE = [
  {
    name: "Одностворчатое",
    type: WindowTypeEnum.singleLeaf,
  },
  {
    name: "Двухстворчатое",
    type: WindowTypeEnum.doubleLeaf,
  },
  {
    name: "Трехстворчатое",
    type: WindowTypeEnum.tripleLeaf,
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

export const TOOLTIP_QUANTITY_TEXT = `Количество окон: при выборе одно-, двухстворчатых окон  -  количество окон под одним карнизом не более 2-х;
при выборе трехстворчатого окна - не более 1 окна под одним карнизом.
Количество одинаковых комплектов Вы можете указать на последнем шаге при оформлении заказа.`;
