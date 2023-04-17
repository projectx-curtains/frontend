import CustomBreadcrumbs from "@modules/catalogue/components/CustomBreadcrumbs";
import DetailedDescription from "./components/DetailedDescription";

import style from "./styles/index.module.scss";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={style["privacy-policy-page"]}>
      <CustomBreadcrumbs />
      <DetailedDescription />
    </div>
  );
};
export default PrivacyPolicy;
