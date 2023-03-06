import { LIST_TITLE } from "../constants";
import style from "../styles/index.module.scss";

const ListTitle: React.FC = () => {
  return (
    <div className={style["list-title"]}>
      {LIST_TITLE.map((title, index) => {
        return (
          <a
            key={index}
            href={title.href}
            className={style["list-title__title"]}>
            {title.title}
          </a>
        );
      })}
    </div>
  );
};

export default ListTitle;
