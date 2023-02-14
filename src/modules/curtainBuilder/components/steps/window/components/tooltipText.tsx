import style from "@common/formUI/components/tooltip/styles/tooltip.module.scss";

const TooltipQuantityText = (
  <p className={style.tooltip__text}>
    Количество окон: <br />
    при выборе одно-, двухстворчатых окон - количество окон под одним карнизом
    не более 2-х; <br />
    при выборе трехстворчатого окна - не более 1 окна под одним карнизом. <br />
    <span className={style["tooltip__text--bold"]}>
      Количество одинаковых комплектов Вы можете указать на последнем шаге при
      оформлении заказа.
    </span>
  </p>
);

export default TooltipQuantityText;
