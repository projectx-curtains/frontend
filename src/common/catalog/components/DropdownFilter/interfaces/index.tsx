type FilterData = {
  id: string;
  nameFilter: string;
};

export interface IItemsFilterProps {
  itemsFilter: Array<FilterData>;
}

export interface IDropdownFilterProps {
  id: string;
  nameTitle: string;
  itemsFilter: Array<FilterData>;
}
