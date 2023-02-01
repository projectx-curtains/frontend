import { FormikContextType } from "formik";

export interface ICartModuleProps {
  formik: FormikContextType<any>;
  countQuantity: number;
  onAdd: () => void;
  onReduct: () => void;
  children: React.ReactNode;
  defaultTheme: string;
  isScrolled: boolean;
}
