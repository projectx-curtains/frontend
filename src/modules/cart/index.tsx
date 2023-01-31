import { FormikProvider } from "formik";
import { useFormik } from "formik";
import { useContext } from "react";
import { validationSchema } from "./validation";
import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import CardProduct from "./components/CardProduct";
import ListCardsHeader from "./components/CardProduct/components/listCardsHeader";
import CustomBreadcrumbsInBasket from "./components/CustomBreadcrumbsInBasket";
import Delivery from "./components/Delivery";
import OrderingModule from "./components/OrderingModule";
import PersonalInformation from "./components/PersonalInformation";
import { cartContext } from "@common/contexts/cartContext/components";

import style from "./styles/index.module.scss";

const CartModule: React.FC = () => {
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
    validationSchema,
  });

  const cartData = useContext(cartContext);

  return (
    <FormikProvider value={formik}>
      <form onSubmit={() => formik.handleSubmit()}>
        <div className={style["cart"]}>
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
              number={cartData.cartContextValue.countQuantity}
              price={cartData.cartContextValue.priceProduct}
              address="г.Минск, ул Уманская, д.54"
            />
          </div>
        </div>
      </form>
    </FormikProvider>
  );
};
export default CartModule;
