type FilterData = {
  id: number;
  title: string;
  color: string;
};

export interface IColorFilterProps {
  filters: Array<FilterData>;
}

export interface IColorDropdownFilterContainerProps {
  id: number;
  title: string;
  gradient: Array<string>;
  dropdownFilterColor: Array<FilterData>;
}

export interface IColorDropdownFilterProps
  extends IColorDropdownFilterContainerProps {
  isOpen: boolean;
  handleOpen: () => void;
}
