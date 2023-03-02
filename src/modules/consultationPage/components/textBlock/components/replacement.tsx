import classNames from "classnames";
import { PHONE } from "../mocks";
import style from "../styles/index.module.scss";

const Replacement: React.FC = () => {
  return (
    <div className={style["block"]}>
      <h1 className={style["block__title"]}>Замена и возврат товара</h1>
      <p className={style["block__text"]}>
        При наличии претензии по качеству или комплектности приобретенной
        продукции, а также недостатков в товаре, просим вас заполнить форму
        обратной связи, после чего наши специалисты вам позвонят. В случае, если
        вы не имеете возможности заполнить форму онлайн, вы можете обратиться по
        телефонам:{" "}
        <b className={classNames(style["block__text"], style["bold"])}>
          {PHONE}
        </b>{" "}
        Если товар подлежит замене, мы примем его даже при отсутствии чека,
        только убедимся, что товар куплен у нас.
      </p>
      <p className={classNames(style["block__text"], style["margin-top"])}>
        Все правила взаимодействия покупателя и продавца закреплены актами
        законодательства Республики Беларусь о защите прав потребителя и носят
        обязательный характер как для продавцов, так и для покупателей.
      </p>
    </div>
  );
};
export default Replacement;
