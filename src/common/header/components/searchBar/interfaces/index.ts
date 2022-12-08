import React from "react";

export interface ISearchBarContainerProps {
  theme: string;
  menuOpen: boolean;
}

export interface ISearchBarProps {
  theme: string;
  menuOpen: boolean;
  handleSearchItems: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  isActivePopup: boolean;
  setIsActivePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISearchBarPopupProps {
  searchInput: string;
  setIsActivePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IErrorSearchBarPopupProps {
  setIsActivePopup: React.Dispatch<React.SetStateAction<boolean>>;
}
