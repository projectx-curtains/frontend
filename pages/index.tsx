import type { NextPage } from "next";
import DropdownColorFilter from "@common/catalog/components/DropdownColorFilter";
import { sampleColorFiltersData } from "@common/catalog/components/DropdownColorFilter/mocks/sampleColorFiltersData";
import DropdownFilter from "@common/catalog/components/DropdownFilter";
import { sampleDropdownFiltersData } from "@common/catalog/components/DropdownFilter/mocks/sampleDropdownFiltersData";
import PriceRangeFilter from "@common/catalog/components/PriceRangeFilter";
import SaveEraseButtons from "@common/catalog/components/SaveEraseButtons";
import TagCloudContainer from "@common/catalog/components/TagCloud/containers/index";
import { sampleDataTags } from "@common/catalog/components/TagCloud/mocks/sampleDataTags";
import styles from "../styles/Home.module.css";
import PriceFilter from "@common/catalog/components/PriceFilter";
import LinkStructure from "@common/catalog/components/LinkStructure";
import Categories from "@common/catalog/components/Categories/index";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* for illustration purposes --->*/}

      <div>
        {sampleColorFiltersData.map((filters) => (
          <DropdownColorFilter
            key={1}
            id={filters.id}
            title={filters.title}
            gradientColorBot={filters.gradientColorBot}
            gradientColorMid={filters.gradientColorMid}
            gradientColorTop={filters.gradientColorTop}
            dropdownFilterColor={filters.dropdownFilterColor}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        {sampleDropdownFiltersData.map((filters) => (
          <DropdownFilter
            key={2}
            title={filters.title}
            itemsFilter={filters.itemsFilter}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px", display: "flex", flexDirection: "row" }}>
        {sampleDataTags.map((tag) => (
          <TagCloudContainer
            key={3}
            id={tag.id}
            name={tag.name}
            colorTheSquare={tag.colorTheSquare}
            color={tag.color}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <PriceFilter key={5} />
      </div>

      <div style={{ marginTop: "20px" }}>
        <PriceRangeFilter
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
        <LinkStructure currentTitle="Название раздела" />
      </div>

      <div style={{ marginTop: "20px" }}>
        <Categories />
      </div>

      {/* <--- */}
    </div>
  );
};

export default Home;
