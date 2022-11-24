import * as yup from "yup";
import { WindowQuantityEnum } from "../../steps/window/types";
import { CorniceTypeEnum } from "../../steps/cornice/types";

const REQUIRED_FIELD = "*Обязательное поле";

export const windowValidationSchema = yup.object({
  typeWindow: yup.string().required(REQUIRED_FIELD),
  quantityWindow: yup.string().default(WindowQuantityEnum.double),
  widthWindow: yup.number().positive().required(REQUIRED_FIELD),
  heightWindow: yup.number().positive().required(REQUIRED_FIELD),
  distanceWindow: yup.number().when("quantityWindow", (val, schema) => {
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
