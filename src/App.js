import { type } from "@testing-library/user-event/dist/type";
import Banner from "./components/Banner";
import Layout from "./components/Catalog/CatalogLayout";
import Card from "./components/Card";


function App() {
  return (
    <div className="app">
      <Banner />
      <Layout />
      <Card
      label={'Новинка'}
      index ={'367'}
      setName={'Шторы'}
      setPrice={'250 BYN'}
      />

    </div>
  );
}

export default App;
