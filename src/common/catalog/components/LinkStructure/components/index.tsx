import { IoIosArrowForward } from "react-icons/io";
import { ILinkStructureProps } from "../interfaces";
import style from "../styles/index.module.scss";

const LinkStructure: React.FC<ILinkStructureProps> = ({ currentTitle }) => {
  return (
    <div className={style["link-structure"]}>
      <a href="/ " className={style["link-structure__home"]}>
        Главная
      </a>
      <IoIosArrowForward className={style["link-structure__arrow-forward"]} />
      <a className={style["link-structure__current"]}>{currentTitle}</a>
    </div>
  );
};

export default LinkStructure;
