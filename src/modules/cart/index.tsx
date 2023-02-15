import { FormikProvider } from "formik";
import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import CardProduct from "./components/CardProduct";
import CustomBreadcrumbsInBasket from "./components/CustomBreadcrumbsInBasket";
import Delivery from "./components/Delivery";
import Order from "./components/Order";
import PersonalInformation from "./components/PersonalInformation";
import { ICartModuleProps } from "./interfaces";

import style from "./styles/index.module.scss";
import CustomBreadcrumbsInBasketMobile from "./components/CustomBreadcrumbsInBasket/components/mobileVersion";

const CartModule: React.FC<ICartModuleProps> = ({
  formik,
  countQuantity,
  onAdd,
  onReduct,
}) => {
  return (
    <FormikProvider value={formik}>
      <form onSubmit={() => formik.handleSubmit()}>
        <div className={style["cart"]}>
          <CustomBreadcrumbs />
          <CustomBreadcrumbsInBasket number={2} />
          <div className={style["wrapper"]}>
            <div className={style["wrapper-cards-deliv-info"]}>
              <CardProduct
                nameProduct="Комплект штор Кармен"
                materialProduct="сатин софт и сетка вышивка корд"
                widthProduct={330}
                heightProduct={250}
                priceProduct={1050.0}
                countQuantity={countQuantity}
                onAdd={onAdd}
                onReduct={onReduct}
              />
              <CustomBreadcrumbsInBasketMobile />
              <Delivery />
              <PersonalInformation />
            </div>
            <Order
              countQuantity={countQuantity}
              address={formik.initialValues.address}
            />
          </div>
        </div>
      </form>
    </FormikProvider>
  );
};
export default CartModule;
