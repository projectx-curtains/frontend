import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Categories from "./Сategories";

const CatalogPage = () => {
  return (
    <div className="catalogPage">
      <div className="catalogPage__linkStructure">
        <Link to="/">
          <p className="linkStructure__home">Главная</p>
        </Link>
        <IoIosArrowForward className="linkStructure__arrowForward" />
        <p className="linkStructure__current">Текущий</p>
      </div>
      <Categories className="catalogPage__categories" />
    </div>
  );
};

export default CatalogPage;
