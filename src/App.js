import { type } from "@testing-library/user-event/dist/type";
import Button from "./components/Button";
import Card from "./components/Card/itemCard";
import Layout from "./components/Catalog/Layout";


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
      <Layout
      />
    </div>
  );
}

export default App;
