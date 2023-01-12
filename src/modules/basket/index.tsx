import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import CustomBreadcrumbsInBasket from "./components/CustomBreadcrumbsInBasket";

// import style from "./styles/index.module.scss";

const BasketeModule: React.FC = () => {
  return (
    <>
      <CustomBreadcrumbs />
      <CustomBreadcrumbsInBasket number={2} />
    </>
  );
};
export default BasketeModule;
