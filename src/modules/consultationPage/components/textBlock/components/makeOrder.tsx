import { useState } from "react";
import classNames from "classnames";
import Link from "@mui/material/Link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { INSTRUCTIONS_MAKE_ORDER } from "../constants";
import style from "../styles/index.module.scss";

const MakeOrder: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const textClass = showAll ? "text-show-all" : "text-show-part";
  const buttonText = showAll ? "Скрыть" : "Читать далее";
  return (
    <div className={style["wrapper-block"]}>
      <div
        id="makeOrder"
        className={classNames(style["block"], style[textClass])}>
        <h1 className={style["block__title"]}>Как сделать заказ?</h1>
        <p className={style["block__text"]}>
          Чтобы найти и заказать любой товар на нашем ресурсе, для начала
          воспользуйтесь поисковой строкой или через пункт меню{" "}
          <Link
            className={classNames(style["block__text"], style["link"])}
            href="/catalogue">
            Каталог товаров.
          </Link>
        </p>
        <p className={style["block__text"]}>
          Также вы можете воспользоваться индивидуальным заказом штор и тюля
          через пункт меню{" "}
          <Link
            className={classNames(style["block__text"], style["link"])}
            href="/curtainBuilder">
            Конструктор.
          </Link>
        </p>
        {INSTRUCTIONS_MAKE_ORDER.map((instruction) => {
          return (
            <ol
              key={instruction.id}
              className={classNames(style["block__subtitle"], style["ol"])}>
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
            </ol>
          );
        })}
      </div>
      <div className={style["wrapper-button-show"]}>
        <button
          className={style["button-show"]}
          onClick={() => toggleShowAll()}>
          {buttonText}
        </button>
        {showAll ? (
          <ArrowDropUpIcon fontSize="small" />
        ) : (
          <ArrowDropDownIcon fontSize="small" />
        )}
      </div>
    </div>
  );
};
export default MakeOrder;
