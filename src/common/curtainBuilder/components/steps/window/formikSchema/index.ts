import { useFormik } from "formik";
import * as yup from "yup";
import { WindowTypeEnum, WindowQuantityEnum } from "../types";

export const useWindowForm = ({ handleNext }) => {
  const windowInfoValidationSchema = yup.object({
    type: yup.string().required("Обязательное поле"),
    quantity: yup.string().required("Обязательное поле"),
    width: yup.number().required("Обязательное поле"),
    height: yup.number().required("Обязательное поле"),
    distance: yup.number().notRequired(),
  });

  const formikWindowInfo = useFormik({
    initialValues: {
      type: WindowTypeEnum.doubleLeaf,
      quantity: WindowQuantityEnum.double,
      width: 0,
      height: 0,
      distance: 0,
    },
    validationSchema: windowInfoValidationSchema,
    onSubmit: (values) => {
      handleNext();
    },
  });

  return formikWindowInfo;
};
