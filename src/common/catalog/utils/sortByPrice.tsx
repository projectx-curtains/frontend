import { ISortByPriceProps } from "./interfaces";

const sortByPrice: React.FC<ISortByPriceProps> = ({ data, rule }) => {
  if (rule === "ascending") {
    return [...data].sort((a, b) => a.price - b.price); //ascending
  } else {
    return [...data].sort((a, b) => b.price - a.price); // descending
  }
};

export default sortByPrice;
