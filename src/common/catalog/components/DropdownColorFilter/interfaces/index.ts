type FilterData = {
  id: string;
  nameFilter: string;
  color: string;
};

export interface IColorFilterProps {
  itemFilterData: Array<FilterData>;
}

export interface IColorDropdownFilterProps {
  id: number;
  nameTitle: string;
  gradientColorTop: string;
  gradientColorMid: string;
  gradientColorBot: string;
  dropdownFilterColor: Array<FilterData>;
}
