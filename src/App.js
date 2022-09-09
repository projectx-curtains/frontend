import Button from "./components/Button";
import Card from "./components/Card/itemCard";
import XLc from "./components/Catalog/XL_c";
import Mc from "./components/Catalog/M_c";
import Sc from "./components/Catalog/S_c";

function App() {
  return (
    <div className="app">
      <div className="container">
        <NewProducts galleryItems={NewProduct_mockData} />
        <Popular popularData={NewProduct_mockData} />
        <OurWork />
        <WhyWeAre />
        <Reviews />
      </div>
    </div>)
}

export default App;
