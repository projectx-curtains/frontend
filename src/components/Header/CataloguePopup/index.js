import { catalogueData } from "../../../assets/data/catalogue"


const CataloguePopup = () => {

  return (
  <ul className="container catalog-popup"> 
    {catalogueData.map(({name, img}, el) =>
      <li className="catalog-popup__item"> 
        <img 
          key={el}
          src={require(`../../../assets/img/catalogue-popup/0.jpg`)}
          alt={name}
          className="catalog-popup__img"
        />
        <p className="catalog-popup__name">{name}</p>
      </li>
    )}
  </ul>
  )
};

export default CataloguePopup;

