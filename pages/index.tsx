import type { NextPage } from 'next'
import DropdownColorFilter from '../src/common/catalog/components/DropdownColorFilter'
import DropdownFilter from '../src/common/catalog/components/DropdownFilter'
import PriceRangeFilter from '../src/common/catalog/components/PriceRangeFilter'
import SaveEraseButtons from '../src/common/catalog/components/SaveEraseButtons'
import TagCloud from '../src/common/catalog/components/TagCloud'
import PriceFilter from '../src/common/catalog/components/PriceFilter'
import LinkStructure from '../src/common/catalog/components/LinkStructure'
import Categories from '../src/common/catalog/components/Categories'
import { sampleColorFiltersData } from '../src/common/catalog/components/DropdownColorFilter/mocks/sampleColorFiltersData'
import { sampleDropdownFiltersData } from '../src/common/catalog/components/DropdownFilter/mocks/sampleDropdownFiltersData'
import { sampleDataTags } from '../src/common/catalog/components/TagCloud/mocks/sampleDataTags'
import styles from '../styles/Home.module.css'




const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      
      {/* for illustration purposes --->*/}

      <div>
        {sampleColorFiltersData.map((colorFilter)=>
          (<DropdownColorFilter key={colorFilter.id} id={colorFilter.id} nameTitle={colorFilter.nameTitle} gradientColorBot={colorFilter.gradientColorBot} gradientColorMid={colorFilter.gradientColorMid} gradientColorTop={colorFilter.gradientColorTop} dropdownFilterColor={colorFilter.dropdownFilterColor} />)
        )}      
      </div>

      <div style={{marginTop:"20px"}}>      
        {sampleDropdownFiltersData.map((filter) => (
            <DropdownFilter key={filter.id} nameTitle={filter.nameTitle} itemsFilter={filter.itemsFilter} />
        ))}        
      </div>

      <div style={{marginTop:"20px", display: "flex", flexDirection: "row"}}>
        {sampleDataTags.map((tag)=>(
          <TagCloud key={tag.id}  id={tag.id} name={tag.name} colorTheSquare={tag.colorTheSquare} color={tag.color} />
        ))}        
      </div>

      <div style={{marginTop:"20px"}}>        
        <PriceFilter />        
      </div>

      <div style={{marginTop:"20px"}}>        
        <Categories />
      </div>

      <div style={{marginTop:"20px"}}>
        <PriceRangeFilter
            minPrice={0}
            maxPrice={2000}
            minPriceDifference={50}
            minPriceOnTheScreen={25}
            maxPriceOnTheScreen={1000}
          />
      </div>

      <div style={{marginTop:"20px"}}>
        <SaveEraseButtons />
      </div>

      <div style={{marginTop:"20px"}}>
        <LinkStructure />
      </div>



             
      
      {/* <--- */}

      
    </div>
  )
}

export default Home
