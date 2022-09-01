import Button from "./components/Button";
import OurWork from './pages/home/sections/OurWork';
import Reviews from './pages/home/sections/Reviews';


function App() {

  const descriptionTextWork = 'Фото с комплектом "Кармен": в уютной квартире семьи Сергея и Татьяны не хватало акцентного элемента, который одновременно подчеркивал бы характер хозяев, а также украшал интерьер. В реализации идеи были использованы такие материалы как канвас и тюль сетка, а цвета подобраны под смелый запрос хозяев – красный и молочный.'
  const descriptionTextReviews = '“Если хочется почувствовать себя дизайнером, то вам определенно в «Зашторим»! Уникальность конструктора штор поражает и убирает неудобства, вызванные при заказе стандартных готовых штор: не подошел цвет, высота и ширина, крепление к карнизу и пр. В общем, всем рекомендую!”'
  const user = 'Галина';
  const location = 'г.Могилёв, Беларусь';

  return (
    <div className="app">
      <OurWork descriptionText={descriptionTextWork} />
      <Reviews descriptionText={descriptionTextReviews} user={user} location={location} />
      {/* <Button
        className="main__btn"
        onClick={() => console.log('hiii')}>
        <span className="main__btn__text">
            Каталог
        </span>
      </Button> */}
    </div>
  );
}

export default App;
