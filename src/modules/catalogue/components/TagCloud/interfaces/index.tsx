export interface ITagCloudContainerProps {
  id?: number;
  name: string;
  color?: string;
  isTagRemoved?: boolean;
}

export interface ITagCloudProps {
  tags: Array<ITagCloudContainerProps>;
  handleClose: any;
}
