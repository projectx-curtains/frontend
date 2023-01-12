import Button from "@mui/material/Button";
import { IOrderingModuleProps } from "../interfaces";
import style from "../styles/index.module.scss";

const OrderingModule: React.FC<IOrderingModuleProps> = ({
  number,
  address,
  price,
}) => {
  return (
    <div className={style["ordering-module"]}>
      <h2 className={style["ordering-module__title"]}>Общая сумма корзины</h2>
      <div className={style["ordering-module__wrapper-info"]}>
        <div className={style["goods"]}>
          <p className={style["goods__item"]}>Товары</p>
          <p>{`${number} шт.`}</p>
        </div>
        <div className={style["delivery"]}>
          <p className={style["delivery__item"]}>Доставка</p>
          <p className={style["delivery__item"]}>{address}</p>
        </div>
      </div>
      <div className={style["ordering-module__wrapper-price"]}>
        <p className={style["price-item"]}>Итого</p>
        <p className={style["price-item"]}>{`от ${price} BYN`}</p>
      </div>
      <div className={style["ordering-module__wrapper-description"]}>
        <p className={style["description-item"]}>
          <b className={style["bold"]}>Итоговая цена</b> заказа будет Вам
          сообщена нашим специалистом после уточнения всех деталей.
        </p>
      </div>
      <Button
        className={style["ordering-module__button"]}
        href="/---"
        variant="contained">
        Оформить заказ
      </Button>
    </div>
  );
};
export default OrderingModule;
