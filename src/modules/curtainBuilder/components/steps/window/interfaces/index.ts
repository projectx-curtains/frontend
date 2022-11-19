export interface IWindowStep {
  isTypeEmpty: boolean;
  isDistanceDisabled: boolean;
  isTripleLeaf: boolean;
  getImagePath: () => string;
  handleSelectOptions: (e: React.MouseEventHandler<HTMLLIElement>) => void;
  handleRadioButtonOptions: (e: React.FormEvent<HTMLFormElement>) => void;
}
