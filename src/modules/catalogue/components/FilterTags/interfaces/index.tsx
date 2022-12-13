export interface IFilterTagsContainerProps {
  id?: number;
  name: string;
  color?: string;
  isTagRemoved?: boolean;
}

export interface IFilterTagsProps {
  tags: Array<IFilterTagsContainerProps>;
  handleClose: any;
}
