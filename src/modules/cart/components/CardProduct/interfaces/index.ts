import { FormikContextType } from "formik";

export interface ICardProductContainerProps {
  nameProduct: string;
  materialProduct: string;
  widthProduct: number;
  heightProduct: number;
  priceProduct: number;
}

export interface ICardProductProps extends ICardProductContainerProps {
  countQuantity: number;
  onAdd: () => void;
  onReduct: () => void;
  handleRemove: () => void;
  formik: FormikContextType<any>;
}
