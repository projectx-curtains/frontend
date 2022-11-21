import * as yup from "yup";
import { WindowQuantityEnum } from "../../steps/window/types";

const REQUIRED_FIELD = "*Обязательное поле";

export const windowValidationSchema = yup.object({
  type: yup.string().required(REQUIRED_FIELD),
  quantity: yup.string().default(WindowQuantityEnum.double),
  width: yup.number().positive().required(REQUIRED_FIELD),
  height: yup.number().positive().required(REQUIRED_FIELD),
  distance: yup.number().when("quantity", (val, schema) => {
    if (val === WindowQuantityEnum.double) {
      return yup.number().positive().required(REQUIRED_FIELD);
    } else {
      return yup.number().notRequired();
    }
  }),
});
