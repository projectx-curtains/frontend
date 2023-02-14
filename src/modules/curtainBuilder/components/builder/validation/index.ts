import * as yup from "yup";
import { WindowQuantityEnum, WindowTypeEnum } from "../../steps/window/types";
import { CorniceTypeEnum } from "../../steps/cornice/types";
import { CurtainTypeEnum } from "../../steps/curtain/types";

const REQUIRED_FIELD = "*Обязательное поле";
const ONE_CURTAIN = 1;
const TWO_CURTAINS = 2;
const getRequiredQuantity = (quantity: number) => `*Максимум ${quantity}`;

export const windowValidationSchema = yup.object({
  typeWindow: yup.string().required(REQUIRED_FIELD),
  quantityWindow: yup.string().default(WindowQuantityEnum.double),
  widthWindow: yup.number().positive().required(REQUIRED_FIELD),
  heightWindow: yup.number().positive().required(REQUIRED_FIELD),
  distanceWindow: yup.number().when("quantityWindow", (val) => {
    if (val === WindowQuantityEnum.double) {
      return yup.number().positive().required(REQUIRED_FIELD);
    } else {
      return yup.number().notRequired();
    }
  }),
});

export const corniceValidationSchema = yup.object({
  typeCornice: yup.string().default(CorniceTypeEnum.ceiling),
  widthCornice: yup.number().positive().required(REQUIRED_FIELD),
});

export const curtainValidationSchema = yup.object({
  typeCurtain: yup.string().required(REQUIRED_FIELD),
  materialCurtain: yup.string().required(REQUIRED_FIELD),

  widthCurtain: yup.number().positive().required(REQUIRED_FIELD),
  heightCurtain: yup.number().positive().required(REQUIRED_FIELD),
  quantityCurtain: yup
    .number()
    .when(
      ["typeCurtain", "quantityWindow", "typeWindow"],
      ([typeCurtain, quantityWindow, typeWindow], schema) => {
        switch (typeCurtain) {
          case (CurtainTypeEnum.austrian,
          CurtainTypeEnum.english,
          CurtainTypeEnum.french,
          CurtainTypeEnum.imperial):
            return schema
              .min(ONE_CURTAIN)
              .max(ONE_CURTAIN)
              .required(getRequiredQuantity(ONE_CURTAIN));
          case (CurtainTypeEnum.classic, CurtainTypeEnum.thread):
            return schema
              .min(ONE_CURTAIN)
              .max(TWO_CURTAINS)
              .required(getRequiredQuantity(TWO_CURTAINS));
          case (CurtainTypeEnum.crossed, CurtainTypeEnum.italian):
            typeWindow === WindowTypeEnum.doubleLeaf &&
            quantityWindow === WindowQuantityEnum.double
              ? schema
                  .min(ONE_CURTAIN)
                  .max(TWO_CURTAINS)
                  .required(getRequiredQuantity(TWO_CURTAINS))
              : schema
                  .min(ONE_CURTAIN)
                  .max(ONE_CURTAIN)
                  .required(getRequiredQuantity(ONE_CURTAIN));
          case CurtainTypeEnum.romian:
            return schema
              .min(ONE_CURTAIN)
              .max(quantityWindow)
              .required(getRequiredQuantity(quantityWindow));
        }
      }
    ),

  designCurtain: yup.string().required(REQUIRED_FIELD),
  sectionDirectionCurtain: yup.string().required(REQUIRED_FIELD),
  sectionQuantityCurtain: yup.string().required(REQUIRED_FIELD),
});
