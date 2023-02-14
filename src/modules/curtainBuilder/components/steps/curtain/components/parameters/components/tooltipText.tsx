import style from "@common/formUI/components/tooltip/styles/tooltip.module.scss";

const TooltipSizeQuantityText = (
  <p className={style.tooltip__text}>
    Количество портьер - количество портьер на одно окно на однорядном карнизе
    <br /> (максимум 2). <br />
    <span className={style["tooltip__text--bold"]}>
      При заказе более 2-х единиц необходимо дополнительная консультация
      специалиста.
    </span>
  </p>
);

export default TooltipSizeQuantityText;
