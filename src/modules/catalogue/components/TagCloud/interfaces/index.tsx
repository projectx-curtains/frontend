export interface ITagCloudContainerProps {
  id?: number;
  name: string;
  colorTheSquare?: boolean;
  color?: string;
  isTagRemoved?: boolean;
}

export interface ITagCloudProps {
  tags: Array<ITagCloudContainerProps>;
  handleClose: any;
}
