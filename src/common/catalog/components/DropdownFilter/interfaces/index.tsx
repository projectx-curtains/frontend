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
  children: React.ReactNode;
}

export interface IDropdownFilterProps extends IDropdownFilterContainerProps {
  isOpen: boolean;
  handleOpen: () => void;
}
