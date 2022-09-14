// import { useState } from "react";

const Categories = () => {
  const categorySelection = () => {};
  return (
    <div className="categories">
      <ul className="categoriesList">
        <li className="categoriesList__item" onClick={categorySelection}>
          Все категории
        </li>
        <li className="categoriesList__item" onClick={categorySelection}>
          Шторы
        </li>
        <li className="categoriesList__item" onClick={categorySelection}>
          Ткани
        </li>
        <li className="categoriesList__item" onClick={categorySelection}>
          Ламбрекены
        </li>
        <li className="categoriesList__item" onClick={categorySelection}>
          Подушки
        </li>
        <li className="categoriesList__item" onClick={categorySelection}>
          Покрывала
        </li>
        <li className="categoriesList__item" onClick={categorySelection}>
          Фурнитура
        </li>
      </ul>
    </div>
  );
};

export default Categories;
