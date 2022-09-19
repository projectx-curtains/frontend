import { type } from "@testing-library/user-event/dist/type";
import Banner from "./components/Banner";
import Layout from "./components/Catalog/CatalogLayout";
import Card from "./components/Card";
import SortingPriceBlock from "./components/Catalog/SortingPriceBlock";
import dataCards from "./components/Catalog/SortingPriceBlock/dataCards";

function App() {
  return (
    <div className="app">
      <Banner />
      <Layout />
      <Card
        label={"Новинка"}
        index={"367"}
        setName={"Шторы"}
        setPrice={"250 BYN"}
      />
      <SortingPriceBlock data={dataCards} />
    </div>
  );
}

export default App;
