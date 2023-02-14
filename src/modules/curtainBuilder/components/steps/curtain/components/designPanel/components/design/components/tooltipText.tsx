import style from "@common/formUI/components/tooltip/styles/tooltip.module.scss";

const TooltipDesignText = (
  <p className={style.tooltip__text}>
    <span className={style["tooltip__text--bold"]}>
      Комбинированная портьера
    </span>
    &nbsp;- это портьера, состоящая из нескольких полотен, сшитых между собой в
    горизонтальном или вертикальном направлениях.
  </p>
);

export default TooltipDesignText;
