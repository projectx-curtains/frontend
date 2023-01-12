import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import CustomBreadcrumbsInBasket from "./components/CustomBreadcrumbsInBasket";
import OrderingModule from "./components/OrderingModule";

// import style from "./styles/index.module.scss";

const BasketeModule: React.FC = () => {
  return (
    <>
      <CustomBreadcrumbs />
      <CustomBreadcrumbsInBasket number={2} />
      <OrderingModule
        number={2}
        price={1050}
        address="г.Минск, ул Уманская, д.54"
      />
    </>
  );
};
export default BasketeModule;
