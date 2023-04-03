export interface IHeaderProps {
  isMenuOpen: boolean;
  headerTheme: string;
  menuToggleHandler: () => void;
  isChoiceProduct: boolean;
}

export interface IHeaderContainerProps {
  defaultTheme: string;
  isScrolled: boolean;
}
