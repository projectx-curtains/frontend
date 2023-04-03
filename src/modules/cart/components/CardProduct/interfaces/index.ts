export interface ICardProductContainerProps {
  nameProduct: string;
  materialProduct: string;
  widthProduct: number;
  heightProduct: number;
  priceProduct: number;
  onAdd: () => void;
  onReduct: () => void;
}

export interface ICardProductProps extends ICardProductContainerProps {
  handleRemove: (id: number) => void;
}
