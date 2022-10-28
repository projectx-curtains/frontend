import { IoIosArrowForward } from "react-icons/io";
import { ILinkStructureProps } from "../interfaces";

const LinkStructure: React.FC<ILinkStructureProps> = ({ currentTitle }) => {
  return (
    <div className="link-structure">
      <a href="/ " className="link-structure__home">
        Главная
      </a>
      <IoIosArrowForward className="link-structure__arrow-forward" />
      <a className="link-structure__current">{currentTitle}</a>
    </div>
  );
};

export default LinkStructure;
