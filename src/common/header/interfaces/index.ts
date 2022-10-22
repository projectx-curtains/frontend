export interface IHeaderProps {
  isMenuOpen: boolean;
  headerTheme: string;
  menuToggleHandler: () => void;
}

export interface ISearchBarProps {
  theme: string;
  menuOpen: boolean;
}

export interface ISearchBarPopupProps {
  searchInput: string;
  setIsActivePopup: React.Dispatch<React.SetStateAction<boolean>>;
}
