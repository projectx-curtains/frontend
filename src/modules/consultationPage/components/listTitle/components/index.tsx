import { LIST_TITLE } from "../constants";
import style from "../styles/index.module.scss";

const ListTitle: React.FC = () => {
  return (
    <div className={style["list-title"]}>
      <a href="#test">test</a>
      {LIST_TITLE.map((title, index) => {
        return (
          <p
            key={index}
            className={style["list-title__title"]}>
            {title}
          </p>
        );
      })}
    </div>
  );
};

export default ListTitle;
