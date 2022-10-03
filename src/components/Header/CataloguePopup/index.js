import { Link } from "react-router-dom";
import { catalogueData } from "../../../assets/data/catalogue";

const CataloguePopup = () => {
  return (
    <div className="catalog-popup">
      <ul className="container catalog-popup__list ">
        {catalogueData.map(
          ({ name, type }, el) =>
            el !== catalogueData.length - 1 && (
              <li className="catalog-popup__item">
                <Link to={`catalogue/:${type}`}>
                  <img
                    key={el}
                    src={require(`../../../assets/img/CatalogCategories/${name}.png`)}
                    alt={name}
                    className="catalog-popup__img"
                  />
                  <p className="catalog-popup__name">{name}</p>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default CataloguePopup;
