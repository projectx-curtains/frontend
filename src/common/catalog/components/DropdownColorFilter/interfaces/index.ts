type FilterData = {
  id: string;
  title: string;
  color: string;
};

export interface IColorFilterProps {
  filters: Array<FilterData>;
}

export interface IColorDropdownFilterContainerProps {
  id: number;
  title: string;
  gradientColorTop: string;
  gradientColorMid: string;
  gradientColorBot: string;
  dropdownFilterColor: Array<FilterData>;
}

export interface IColorDropdownFilterProps
  extends IColorDropdownFilterContainerProps {
  isOpen: boolean;
  handleOpen: () => void;
}
