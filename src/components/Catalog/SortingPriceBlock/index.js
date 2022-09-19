import { useState } from "react";
import SortedCards from "../SortedCards";
import dataCards from "./dataCards";
import useSortByPrice from "./hook/useSortByPrice";

const SortingPriceBlock = ({ data }) => {
  const dropdownValues = [
    {
      value: "ascending",
      name: "Цена по возрастанию",
    },
    { value: "descending", name: "Цена по убыванию" },
  ];

  const [sort, setSort] = useState("");
  const newData = useSortByPrice(dataCards, sort);

  return (
    <div>
      <select className="select" onChange={(e) => setSort(e.target.value)}>
        {dropdownValues.map((obj) => {
          return (
            <option className="select__item" value={obj.value}>
              {obj.name}
            </option>
          );
        })}
      </select>

      {/* -------- вывел  компонент "SortedCards" для наглядности */}
      <SortedCards data={newData} />
    </div>
  );
};

export default SortingPriceBlock;
