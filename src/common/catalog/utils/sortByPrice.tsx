import { ISortByPriceProps } from "../components/PriceFilter/interfaces";

const sortByPrice: React.FC<ISortByPriceProps> = ({data, rule})=> {
  if (rule === "ascending") {
    return [...data].sort((a, b) => a.price - b.price); //по возрастанию
  } else {
    return [...data].sort((a, b) => b.price - a.price); //по убыванию
  }
}

export default sortByPrice;