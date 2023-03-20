import classNames from "classnames";
import { INSTRUCTIONS_PAYMENT } from "../constants";
import style from "../styles/index.module.scss";

const Payment: React.FC = () => {
  return (
    <div className={style["wrapper-block"]}>
      <div
        id="payment"
        className={style["block"]}>
        <h1 className={style["block__title"]}>Оплата</h1>
        <p className={style["block__text"]}>
          Мы позаботились о том, чтобы оплата покупки была доступна в той форме,
          которую предпочитаете лично вы. Оплата, расчет за товар производится
          только в белорусских рублях.
        </p>
        {INSTRUCTIONS_PAYMENT.map((instruction) => {
          return (
            <ul
              key={instruction.id}
              className={classNames(style["block__subtitle"], style["ul"])}>
              {instruction.title}
              {instruction.text.map((element, index) => {
                return (
                  <li
                    key={index}
                    className={style["block__text"]}>
                    {element}
                    {
                      <b
                        className={classNames(
                          style["block__text"],
                          style["bold"]
                        )}>
                        {instruction.phone}
                      </b>
                    }
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default Payment;
