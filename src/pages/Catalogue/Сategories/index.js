const Categories = () => {
  const titleItems = [
    "Все категории",
    "Шторы",
    "Ткани",
    "Ламбрекены",
    "Подушки",
    "Покрывала",
    "Фурнитура",
  ];
  const categorySelection = () => {};
  return (
    <div className="categories">
      <ul className="categories__list">
        {titleItems.map((el) => {
          return (
            <li className="categories__item" onClick={categorySelection}>
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
