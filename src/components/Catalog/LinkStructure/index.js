import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const LinkStructure = () => {
  return (
    <div className="link-structure">
      <Link to="/">
        <p className="link-structure__home">Главная</p>
      </Link>
      <IoIosArrowForward className="link-structure__arrow-forward" />
      <p className="link-structure__current">Текущий</p>
    </div>
  );
};

export default LinkStructure;
