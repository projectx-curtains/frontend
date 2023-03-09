import { useState } from "react";
import classNames from "classnames";
import { LIST_TITLE } from "../constants";
import style from "../styles/index.module.scss";

const ListTitle: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const hanleClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <div className={style["list-title"]}>
      {LIST_TITLE.map((title, index) => {
        const active = index === activeIndex;
        return (
          <a
            key={index}
            href={title.href}
            className={classNames(style["list-title__title"], {
              [style["active"]]: active,
            })}
            onClick={() => hanleClick(index)}>
            {title.title}
          </a>
        );
      })}
    </div>
  );
};

export default ListTitle;
