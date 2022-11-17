import { StepsEnum as Steps, StepsOptionType, StepsType } from "../types";

const CURTAINS_AND_TULLE: Array<StepsType> = [
  {
    type: Steps.window,
    text: "Выбор параметров окна",
  },
  {
    type: Steps.cornice,
    text: "Выбор параметров карниза",
  },
  {
    type: Steps.curtain,
    text: "Выбор параметров портьер",
  },
  {
    type: Steps.tulle,
    text: "Выбор параметров тюля",
  },
  {
    type: Steps.checkout,
    text: "Оформление заказа",
  },
];

const ONLY_TULLE: Array<StepsType> = [
  {
    type: Steps.window,
    text: "Выбор параметров окна",
  },
  {
    type: Steps.cornice,
    text: "Выбор параметров карниза",
  },
  {
    type: Steps.tulle,
    text: "Выбор параметров тюля",
  },
  {
    type: Steps.checkout,
    text: "Оформление заказа",
  },
];

const ONLY_CURTAINS: Array<StepsType> = [
  {
    type: Steps.window,
    text: "Выбор параметров окна",
  },
  {
    type: Steps.cornice,
    text: "Выбор параметров карниза",
  },
  {
    type: Steps.curtain,
    text: "Выбор параметров портьер",
  },
  {
    type: Steps.checkout,
    text: "Оформление заказа",
  },
];

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
