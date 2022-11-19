import React from "react";
import * as yup from "yup";
import Builder from "../components";
import { IBuilderContainerProps } from "../interfaces";
import { WindowQuantityEnum, WindowTypeEnum } from "../../steps/window/types";

const BuilderContainer: React.FC<IBuilderContainerProps> = ({
  isTulleDisplayed,
  isCurtainDisplayed,
}) => {
  const initialValues = {
    type: "",
    quantity: WindowQuantityEnum.double,
    width: 0,
    height: 0,
    distance: 0,
  };

  const windowValidationSchema = yup.object({
    type: yup.string().required("*Обязательное поле"),
    quantity: yup.string().default(WindowQuantityEnum.double),
    width: yup.number().positive().required("*Обязательное поле"),
    height: yup.number().positive().required("*Обязательное поле"),
    distance: yup.number().when("quantity", (val, schema) => {
      if (val?.length > 0) {
        return yup.number().positive().required("*Обязательное поле");
      } else {
        return yup.number().notRequired();
      }
    }),
  });

  return (
    <Builder
      isTulleDisplayed={isTulleDisplayed}
      isCurtainDisplayed={isCurtainDisplayed}
      initialValues={initialValues}
      windowValidationSchema={windowValidationSchema}
    />
  );
};

export default BuilderContainer;
