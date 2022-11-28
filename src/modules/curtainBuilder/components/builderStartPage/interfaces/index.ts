import React from "react";

export interface IBuilderStartPageContainer {
  handleStartBuilder: (e: React.FormEvent<HTMLFormElement>) => void;
  setChosenOption: React.Dispatch<React.SetStateAction<string>>;
}

export interface IBuilderStartPage {
  handleStartBuilder: (e: React.FormEvent<HTMLFormElement>) => void;
  handleRadioChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
}
