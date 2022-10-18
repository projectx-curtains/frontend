import { Identity } from "@mui/base";
import { useState } from "react";
import dataCards from "../SortingPriceBlock/mocks/dataCards";
import useSortByPrice from "./hook/useSortByPrice";
import { dropdownValues } from "./mocks/dropdownValues";
import SampleCard from "./sampleCard";

const SortingPriceBlock = () => { 

  const [sort, setSort] = useState("");
  // const newData = useSortByPrice(dataCards, sort);

  return (
    <div>
      <select className="select" onChange={(e) => setSort(e.target.value)}>
        {dropdownValues.map((dropdownValue) => (
          <option key={1} className="select__item" value={dropdownValue.value}>
          {dropdownValue.name}
        </option>
        ))}
      </select>

      {/* -------- вывел  компонент "SampleCard" для наглядности */}
      {/* {newData.map((obj)=>(
        <>
          <SampleCard id={obj.id} title={obj.title} price={obj.price} />
        </>
      ))}       */}
    </div>
  );
};

export default SortingPriceBlock;