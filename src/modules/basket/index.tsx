import { FormikProvider } from "formik";
import { useFormik } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import CardProduct from "./components/CardProduct";
import ListCardsHeader from "./components/CardProduct/components/listCardsHeader";
import CustomBreadcrumbsInBasket from "./components/CustomBreadcrumbsInBasket";
import Delivery from "./components/Delivery";
import OrderingModule from "./components/OrderingModule";
import Context from "./components/CardProduct/components/context";
import PersonalInformation from "./components/PersonalInformation";

import style from "./styles/index.module.scss";

const BasketModule: React.FC = () => {
  const validationSchema = yup.object().shape({
    widthWindow: yup.number().min(2).max(3).required("Обязательное поле"),
    heightWindow: yup.number().min(2).max(3).required("Обязательное поле"),
    address: yup
      .string()
      .max(220)
      .matches(/^[а-яА-Я0-9,\.\,\s]+$/)
      .required("Обязательное поле"),
    name: yup
      .string()
      .min(2)
      .max(25)
      .typeError("Недопустимые символы")
      .required("Обязательное поле"),
    phone: yup
      .string()
      .min(9)
      .max(9)
      .matches(/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/)
      .typeError("Недопустимые символы")
      .required("Обязательное поле"),
    email: yup.string().email().typeError("Error").min(12).max(30),
    comment: yup.string().min(0).max(220),
  });

  const formik = useFormik({
    initialValues: {
      widthWindow: 0,
      heightWindow: 0,
      // countQuantity: 1,
      address: "",
      name: "",
      phone: "",
      email: "",
      comment: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationSchema,
  });

  const { countQuantity, priceProduct } = useContext(Context);

  return (
    <FormikProvider value={formik}>
      <form onSubmit={() => formik.handleSubmit()}>
        <div className={style["basket"]}>
          <CustomBreadcrumbs />
          <CustomBreadcrumbsInBasket number={2} />
          <div className={style["wrapper"]}>
            <div className={style["wrapper-cards-deliv-info"]}>
              <ListCardsHeader />
              <CardProduct
                nameProduct="Комплект штор Кармен"
                materialProduct="сатин софт и сетка вышивка корд"
                widthProduct={330}
                heightProduct={250}
                priceProduct={1050.0}
              />
              <Delivery />
              <PersonalInformation />
            </div>
            <OrderingModule
              number={countQuantity}
              price={priceProduct}
              address="г.Минск, ул Уманская, д.54"
            />
          </div>
        </div>
      </form>
    </FormikProvider>
  );
};
export default BasketModule;
