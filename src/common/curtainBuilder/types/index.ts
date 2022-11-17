export enum StepsEnum {
  window,
  cornice,
  curtain,
  tulle,
  checkout,
}

export type StepsType = {
  type: StepsEnum;
  text: string;
};

export type StepsOptionType = {
  value: string;
  label: string;
  curtain: boolean;
  tulle: boolean;
};
