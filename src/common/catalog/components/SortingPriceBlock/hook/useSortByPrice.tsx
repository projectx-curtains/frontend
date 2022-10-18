import { useMemo } from "react";
import { ISortByPriceProps } from "../interfaces";

// const sortByPrice: React.FC<ISortByPriceProps> = ({data, rule})=> {
//   if (rule === "ascending") {
//     return [...data].sort((a, b) => a.price - b.price); //по возрастанию
//   } else {
//     return [...data].sort((a, b) => b.price - a.price); //по убыванию
//   }
// }

const sortByPrice: React.FC<ISortByPriceProps> = ({data, rule})=> {
  return (
  (rule === "ascending") ? ([...data].sort((a, b) => a.price - b.price)) : ([...data].sort((a, b) => b.price - a.price)) 
  )
}

const useSortByPrice: React.FC<ISortByPriceProps> = ({data, rule})=> {
  const sortArray = useMemo(() => sortByPrice({data, rule}), [data, rule]);
  return sortArray;
}
export default useSortByPrice