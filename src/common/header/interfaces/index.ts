export interface IHeaderProps {
  isMenuOpen: boolean;
  headerTheme: string;
  menuToggleHandler: () => void;
}

export interface IHeaderContainerProps {
  defaultTheme: string;
  isScrolled: boolean;
}
