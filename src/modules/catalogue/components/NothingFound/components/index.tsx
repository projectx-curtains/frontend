import Button from "@mui/material/Button";
import SuggestionCards from "../../SuggestionCards";
import NothingFoundImg from "@assets/svg/nothingFoundImg.svg";

import style from "../styles/index.module.scss";

const NothingFound: React.FC = () => {
  return (
    <div className={style["cards-module"]}>
      <div className={style["cards-module__nothing-found"]}>
        <h3 className={style["title"]}>
          У нас нет таких товаров, попробуйте изменить условия поиска
        </h3>
        <div className={style["img"]}>
          <NothingFoundImg />
        </div>
        <h3 className={style["title"]}>Советы по поиску через фильтр</h3>
        <ul className={style["subtitle"]}>
          <li>Попробуйте выбрать другие фильтры и условия поиска.</li>
          <li>Уменьшите количество используемых фильтров.</li>
          <li>Попробуйте создать свой проект штор в Конструкторе.</li>
        </ul>
        <Button
          className={style["button-on-constructor"]}
          href="/constructor"
          variant="contained">
          Создать свой проект штор
        </Button>
        <SuggestionCards />
      </div>
    </div>
  );
};
export default NothingFound;
