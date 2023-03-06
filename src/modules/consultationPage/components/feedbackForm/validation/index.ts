import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(25)
    .matches(/^[А-ЯЁа-яёA-Za-z,\-\s]$/)
    .typeError("Недопустимые символы")
    .required("Обязательное поле"),
  phone: yup
    .string()
    .min(9)
    .max(9)
    .matches(/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/)
    .typeError("Недопустимые символы")
    .required("Обязательное поле"),
  comment: yup
    .string()
    .min(0)
    .max(220)
    .matches(/^[А-ЯЁа-яёA-Za-z0-9,\.\,\!\?\/\s]$/),
});
