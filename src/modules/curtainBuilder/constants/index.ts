import { StepsOptionType } from "../types";

export const BUILDER_OPTIONS: Array<StepsOptionType> = [
  {
    value: "Портьеры",
    label: "Мне нужны только портьеры",
    curtain: true,
    tulle: false,
  },
  {
    value: "Тюль",
    label: "Мне нужен только тюль",
    curtain: false,
    tulle: true,
  },
  {
    value: "Портьеры и тюль",
    label: "Мне нужны и портьеры и тюль",
    curtain: true,
    tulle: true,
  },
];
