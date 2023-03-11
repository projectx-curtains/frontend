export interface IParameters {
  isTypeEmpty: boolean;
  isQuantityDisabled: boolean;
  handleSelectOptionsType: (e: React.MouseEventHandler<HTMLLIElement>) => void;
}

export interface IParametersContainer {
  isChosenCurtain: boolean;
  setCurtain: React.Dispatch<React.SetStateAction<string>>;
}
