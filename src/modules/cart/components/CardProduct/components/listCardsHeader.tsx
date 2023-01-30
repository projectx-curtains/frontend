import style from "../styles/index.module.scss";

const ListCardsHeader: React.FC = () => {
  return (
    <div className={style["list-cards-header"]}>
      <p className={style["list-cards-header__title"]}>Товар</p>
      <p className={style["list-cards-header__title"]}>Количество</p>
      <p className={style["list-cards-header__title"]}>Цена</p>
    </div>
  );
};
export default ListCardsHeader;
