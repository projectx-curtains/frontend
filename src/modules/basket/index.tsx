// import { FormikProvider } from "formik";
import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import CardProduct from "./components/CardProduct";
import ListCardsHeader from "./components/CardProduct/components/listCardsHeader";
import CustomBreadcrumbsInBasket from "./components/CustomBreadcrumbsInBasket";
import Delivery from "./components/Delivery";
import OrderingModule from "./components/OrderingModule";
import PersonalInformation from "./components/PersonalInformation";

import style from "./styles/index.module.scss";

const BasketModule: React.FC = () => {
  return (
    // <FormikProvider value={formik}>
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
          number={2}
          price={1050}
          address="г.Минск, ул Уманская, д.54"
        />
      </div>
    </div>
    // </FormikProvider>
  );
};
export default BasketModule;
