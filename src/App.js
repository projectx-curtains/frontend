import { type } from "@testing-library/user-event/dist/type";
import Banner from "./components/Banner";
import Layout from "./components/Catalog/CatalogLayout";


function App() {
  return (
    <div className="app">
      <Banner />
      <Layout />

    </div>
  );
}

export default App;
