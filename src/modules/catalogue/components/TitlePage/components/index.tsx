import { ITitlePageProps } from "../interface";
import style from "../styles/index.module.scss";

const TitlePage: React.FC<ITitlePageProps> = ({ title }) => {
  return (
    <div className={style["wrapper"]}>
      <h1 className={style["wrapper__title"]}>{title}</h1>
    </div>
  );
};

export default TitlePage;
