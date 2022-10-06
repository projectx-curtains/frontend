import { Link } from "react-router-dom";
import { CATALOGUE } from "../../../assets/data/catalogue";

const CataloguePopup = () => {
  return (
    <div className="catalog-popup">
      <ul className="container catalog-popup__list ">
        {CATALOGUE.map(
          ({ name, path }, catalogueItem) =>
            catalogueItem !== CATALOGUE.length - 1 && (
              <li className="catalog-popup__item">
                <Link to={path}>
                  <img
                    key={name}
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
