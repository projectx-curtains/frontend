import ImgBlock from "./imgBlock/";
import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import style from "../styles/index.module.scss";

const ConsultationPage: React.FC = () => {
  return (
    <div className={style["consultation-page"]}>
      <CustomBreadcrumbs />
      <ImgBlock />
    </div>
  );
};

export default ConsultationPage;
