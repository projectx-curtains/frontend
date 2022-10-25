import React from "react";

export interface IHeaderProps {
  isMenuOpen: boolean;
  headerTheme: string;
  menuToggleHandler: () => void;
}

export interface ISearchBarContainerProps {
  theme: string;
  menuOpen: boolean;
}

export interface ISearchBarProps {
  theme: string;
  menuOpen: boolean;
  handleSearchItems: (e: React.FormEvent<HTMLFormElement>) => void;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  isActivePopup: boolean;
  setIsActivePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISearchBarPopupProps {
  searchInput: string;
  setIsActivePopup: React.Dispatch<React.SetStateAction<boolean>>;
}
