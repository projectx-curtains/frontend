import Button from "./components/Button";


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
    </div>
  );
}

export default App;
