import ImgBlock from "./imgBlock/";
import TextBlock from "./textBlock";
import ListTitle from "./listTitle";
import FeedbackForm from "./feedbackForm";
import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import style from "../styles/index.module.scss";

const ConsultationPage: React.FC = () => {
  return (
    <div className={style["consultation-page"]}>
      <CustomBreadcrumbs />
      <div className={style["wrapper-list-blocks"]}>
        <ListTitle />
        <div className={style["wrapper-blocks"]}>
          <ImgBlock />
          <TextBlock />
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
