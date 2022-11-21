import classNames from "classnames";
import { SelectField } from "@common/formUI/components/select";
import { TooltipField } from "@common/formUI/components/tooltip";
import { RadioGroupField } from "@common/formUI/components/radioGroup";
import { InputField } from "@common/formUI/components/input";
import FormControl from "@mui/material/FormControl";
import TooltipQuantityText from "./tooltipText";
import { IWindowStep } from "../interfaces";
import { WindowQuantityEnum } from "../types";
import { WINDOW_TYPE, WINDOW_QUANTITY } from "../constants";
import style from "../styles/window.module.scss";

const WindowStep: React.FC<IWindowStep> = ({
  isTypeEmpty,
  isTripleLeaf,
  isDistanceDisabled,
  getImagePath,
  handleSelectOptions,
  handleRadioButtonOptions,
}) => {
  return (
    <div className={style["window-builder"]}>
      <div
        className={style["window-builder__board"]}
        style={{
          backgroundImage: `url("/img/Builder/${getImagePath()}")`,
        }}
      ></div>
      <div className={style.sidebar}>
        <h2 className={style.sidebar__heading}>Параметры окна</h2>
        <FormControl className={style.sidebar__block}>
          <p className={style.sidebar__text}>Вид окна</p>
          <SelectField
            name="type"
            defaultValue=""
            content={WINDOW_TYPE}
            handleSelectOptions={handleSelectOptions}
          />
        </FormControl>

        <FormControl className={style.sidebar__block}>
          <TooltipField title="Количество окон" text={TooltipQuantityText} />

          <RadioGroupField
            name="quantity"
            defaultValue={WindowQuantityEnum.double}
            content={WINDOW_QUANTITY}
            disabled={isTripleLeaf || isTypeEmpty}
            handleRadioButtonOptions={handleRadioButtonOptions}
          />
        </FormControl>

        <div className={style.sidebar__block}>
          <p className={style.sidebar__text}>Размеры окна</p>
          <div className={style["sidebar__block-sizing"]}>
            <FormControl>
              <p className={style.sidebar__label}>Ширина, см</p>
              <InputField name="width" disabled={isTypeEmpty} />
            </FormControl>
            <FormControl>
              <p className={style.sidebar__label}>Высота, см</p>
              <InputField name="height" disabled={isTypeEmpty} />
            </FormControl>
          </div>
        </div>
        <FormControl
          className={classNames(style.sidebar__block, {
            [style["sidebar__block--hidden"]]:
              isDistanceDisabled || isTypeEmpty,
          })}
        >
          <p className={style.sidebar__text}>Расстояние между окнами</p>
          <InputField name="distance" />
        </FormControl>
      </div>
    </div>
  );
};

export default WindowStep;
