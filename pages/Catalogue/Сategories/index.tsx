import { useState } from "react";
import categoriesData from "./mocks/categoriesData";

const Categories = () => {
  const [titleItems, setTitleItems] = useState(categoriesData);

  const handleChange = (index: number) => {
    setTitleItems(
      titleItems.map((obj) => {
        if (obj.selected) {
          return {
            ...obj,
            selected: false,
          };
        }
        if (obj.id === index) {
          return {
            ...obj,
            selected: true,
          };
        }
        return obj;
      })
    );
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        {titleItems.map((titleItem) => {
          return (
            <li
              key={titleItem.id}
              className={
                titleItem.selected ? "categories__item selected" : "categories__item"
              }
              onClick={() => handleChange(titleItem.id)}
            >
              {titleItem.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;