export interface ICurtainBuilderModule {
  isTulleDisplayed: boolean;
  isCurtainDisplayed: boolean;
  handleStartBuilder: (e: React.FormEvent<HTMLFormElement>) => void;
  setChosenOption: React.Dispatch<React.SetStateAction<string>>;
}
