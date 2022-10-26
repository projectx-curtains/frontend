import type { NextPage } from "next";
import DropdownColorFilter from "../src/common/catalog/components/DropdownColorFilter";
import { sampleColorFiltersData } from "../src/common/catalog/components/DropdownColorFilter/mocks/sampleColorFiltersData";
import DropdownFilter from "../src/common/catalog/components/DropdownFilter";
import { sampleDropdownFiltersData } from "../src/common/catalog/components/DropdownFilter/mocks/sampleDropdownFiltersData";
import PriceRangeFilterContainer from "../src/common/catalog/components/PriceRangeFilter/containers/index";
import SaveEraseButtons from "../src/common/catalog/components/SaveEraseButtons";
import TagCloudContainer from "../src/common/catalog/components/TagCloud/containers/index";
import { sampleDataTags } from "../src/common/catalog/components/TagCloud/mocks/sampleDataTags";
import styles from "../styles/Home.module.css";
import PriceFilter from "../src/common/catalog/components/PriceFilter";
import LinkStructure from "../src/common/catalog/components/LinkStructure";
import Categories from "../src/common/catalog/components/Categories/index";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* for illustration purposes --->*/}

      <div>
        {sampleColorFiltersData.map((obj) => (
          <DropdownColorFilter
            key={1}
            id={obj.id}
            nameTitle={obj.nameTitle}
            gradientColorBot={obj.gradientColorBot}
            gradientColorMid={obj.gradientColorMid}
            gradientColorTop={obj.gradientColorTop}
            dropdownFilterColor={obj.dropdownFilterColor}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        {sampleDropdownFiltersData.map((obj) => (
          <DropdownFilter
            key={2}
            nameTitle={obj.nameTitle}
            itemsFilter={obj.itemsFilter}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px", display: "flex", flexDirection: "row" }}>
        {sampleDataTags.map((obj) => (
          <TagCloudContainer
            key={3}
            id={obj.id}
            name={obj.name}
            colorTheSquare={obj.colorTheSquare}
            color={obj.color}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <PriceFilter key={5} />
      </div>

      <div style={{ marginTop: "20px" }}>
        <PriceRangeFilterContainer
          minPrice={0}
          maxPrice={2000}
          minPriceDifference={50}
          minPriceOnTheScreen={25}
          maxPriceOnTheScreen={1000}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <SaveEraseButtons />
      </div>

      <div style={{ marginTop: "20px" }}>
        <LinkStructure />
      </div>

      <div style={{ marginTop: "20px" }}>
        <Categories />
      </div>

      {/* <--- */}
    </div>
  );
};

export default Home;
