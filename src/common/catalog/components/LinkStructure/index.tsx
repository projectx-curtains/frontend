import { IoIosArrowForward } from "react-icons/io";

const LinkStructure = () => {
  return (
    <div className="link-structure">      
      <a href="/ " className="link-structure__home">Главная</a>      
      <IoIosArrowForward className="link-structure__arrow-forward" />
      <a className="link-structure__current">Текущий</a>
    </div>
  );
};

export default LinkStructure;