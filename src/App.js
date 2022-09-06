import { type } from "@testing-library/user-event/dist/type";
import Button from "./components/Button";
import Card from "./components/Card/itemCard";
import CatalogCard from "./components/Catalog/CatalogCard";


function App() {
  return (
    <div className="app">
      <Button
        className="main__btn"
        onClick={() => console.log('hiii')}>
        <span className="main__btn__text">
            Каталог
        </span>
      </Button>

      <Card
        index={'#000'}
        setName={'КОМПЛЕКТ'}
        setPrice={'ОТ 250 BYN'}
        onClick={() => console.log('card click')}
      />
      <CatalogCard
      type={'large'}
      setText={'TEXT'}
      />
      <CatalogCard
      type={'medium'}
      setText={'TEXT'}
      />
      <CatalogCard
      type={'small'}
      setText={'TEXT'}
      />
    </div>
  );
}

export default App;
