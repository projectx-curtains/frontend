type FilterData = {
  id: string;
  title: string;
};

export interface IItemsFilterProps {
  filters: Array<FilterData>;
}

export interface IDropdownFilterContainerProps {
  id?: string;
  title: string;
  itemsFilter: Array<FilterData>;
}

export interface IDropdownFilterProps extends IDropdownFilterContainerProps {
  isOpen: boolean;
  handleOpen: () => void;
}
