import { useState } from "react";

const Categories = () => {
  const [titleItems, setTitleItems] = useState([
    { id: 0, name: "Все категории", selected: false },
    { id: 1, name: "Шторы", selected: false },
    { id: 2, name: "Ткани", selected: false },
    { id: 3, name: "Ламбрекены", selected: false },
    { id: 4, name: "Подушки", selected: false },
    { id: 5, name: "Покрывала", selected: false },
    { id: 6, name: "Фурнитура", selected: false },
  ]);

  const handleChange = (index) => {
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
        {titleItems.map((el) => {
          return (
            <li
              className={
                el.selected ? "categories__item selected" : "categories__item"
              }
              onClick={() => handleChange(el.id)}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
