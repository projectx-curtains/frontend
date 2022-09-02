import Button from "./components/Button";


function App() {
  return (
    <div className="app">
      <OurWork descriptionText={descriptionTextWork} />
      <Reviews descriptionText={descriptionTextReviews} user={user} location={location} />
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

        <XLc
        setText={'TEXT'}
        onClick={() => console.log('XL click')}
        />

        <Mc
        setText={'TEXT'}
        onClick={() => console.log('M click')}
        />

      <Sc
        setText={'TEXT'}
        onClick={() => console.log('M click')}
        />
    </div>
  );
}

export default App;
