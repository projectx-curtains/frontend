import { FormikContextType } from "formik";

export interface ICardProductContainerProps {
  nameProduct: string;
  materialProduct: string;
  widthProduct: number;
  heightProduct: number;
  priceProduct: number;
  countQuantity: number;
  onAdd: () => void;
  onReduct: () => void;
}

export interface ICardProductProps extends ICardProductContainerProps {
  handleRemove: () => void;
  formik: FormikContextType<any>;
}
