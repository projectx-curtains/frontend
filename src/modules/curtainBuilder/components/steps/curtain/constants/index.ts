import { ChosenColorsType } from "./../types/index";
import { CurtainTypeEnum } from "../types";

export const CURTAIN_TYPE = [
  {
    name: "Австрийские",
    value: CurtainTypeEnum.austrian,
  },
  {
    name: "Английские",
    value: CurtainTypeEnum.english,
  },
  {
    name: "Императорские",
    value: CurtainTypeEnum.imperial,
  },
  {
    name: "Итальянские",
    value: CurtainTypeEnum.italian,
  },
  {
    name: "Классические",
    value: CurtainTypeEnum.classic,
  },
  {
    name: "Нитяные",
    value: CurtainTypeEnum.thread,
  },
  {
    name: "Римские",
    value: CurtainTypeEnum.romian,
  },
  {
    name: "Скрещенные",
    value: CurtainTypeEnum.crossed,
  },
  {
    name: "Французкие",
    value: CurtainTypeEnum.french,
  },
];

export const CURTAIN_MATERIAL = [
  {
    name: "Бархат",
    value: "Бархат",
  },
  {
    name: "Блэкаут",
    value: "Блэкаут",
  },
  {
    name: "Бриллиант",
    value: "Бриллиант",
  },
  {
    name: "Гобелен",
    value: "Гобелен",
  },
  {
    name: "Жаккард",
    value: "Жаккард",
  },
  {
    name: "Канвас",
    value: "Канвас",
  },
  {
    name: "Лен",
    value: "Лен",
  },
  {
    name: "Лен искусственный",
    value: "Лен искусственный",
  },
  {
    name: "Рогожа",
    value: "Рогожа",
  },
  {
    name: "Сатен",
    value: "Сатен",
  },
  {
    name: "Софт",
    value: "Софт",
  },
  {
    name: "Тафта",
    value: "Тафта",
  },
  {
    name: "Шелк",
    value: "Шелк",
  },
];

export const INITIAL_COLORSLOT_VALUE: ChosenColorsType = {
  title: "Белый",
  color: "white",
};
