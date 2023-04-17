import classNames from "classnames";
import { INSTRUCTIONS_DELIVERY } from "../constants";
import { ADDRES } from "../mocks";
import style from "../styles/index.module.scss";

const Delivery: React.FC = () => {
  return (
    <div className={style["wrapper-block"]}>
      <div
        id="delivery"
        className={style["block"]}>
        <h1 className={style["block__title"]}>Доставка и самовывоз товара</h1>
        {INSTRUCTIONS_DELIVERY.map((instruction) => {
          return (
            <ul
              key={instruction.id}
              className={classNames(style["block__text"], style["ul"])}>
              {instruction.title}
              {instruction.text.map((element, index) => {
                return (
                  <li
                    key={index}
                    className={style["block__text"]}>
                    {element}
                  </li>
                );
              })}
            </ul>
          );
        })}
        <p className={classNames(style["block__text"], style["margin-top"])}>
          Самовывоз вы можете осуществить из пункта выдачи заказов по адресу{" "}
          <b className={classNames(style["block__text"], style["bold"])}>
            {ADDRES}
          </b>
        </p>
      </div>
    </div>
  );
};
export default Delivery;
