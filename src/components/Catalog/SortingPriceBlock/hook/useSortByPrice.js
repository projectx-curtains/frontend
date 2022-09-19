import { useMemo } from "react";

function sortByPrice(data, rule) {
  if (rule === "ascending") {
    return [...data].sort((a, b) => a.price - b.price); //по возрастанию
  } else {
    return [...data].sort((a, b) => b.price - a.price); //по убыванию
  }
}

function useSortByPrice(data, rule) {
  const sortArray = useMemo(() => sortByPrice(data, rule), [data, rule]);
  return sortArray;
}
export default useSortByPrice;
