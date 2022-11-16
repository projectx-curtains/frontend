export interface ITagCloudContainerProps {
  id?: number;
  name: string;
  colorTheSquare?: boolean;
  color?: string;
  removeTag?: boolean;
}

export interface ITagCloudProps {
  tags: Array<ITagCloudContainerProps>;
  handleClose: any;
}
