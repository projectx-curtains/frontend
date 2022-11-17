export interface IBuilderStarter {
  handleStartBuilder: (e: React.FormEvent<HTMLFormElement>) => void;
  setChosenOption: React.Dispatch<React.SetStateAction<string>>;
}
