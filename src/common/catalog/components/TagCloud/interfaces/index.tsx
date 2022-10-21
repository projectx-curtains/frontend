export interface ITagCloudContainerProps extends Tag {}

export interface ITagCloudProps {
  tags: Array<Tag>;
  handleClose: (id: number) => void;
}

type Tag = {
  id: number;
  name: string;
  colorTheSquare?: boolean;
  color?: string;
  removeTag?: boolean;
};
