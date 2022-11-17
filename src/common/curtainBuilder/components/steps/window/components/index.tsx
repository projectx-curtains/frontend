import { useState, useEffect } from "react";
import { useFormikContext, FormikValues } from "formik";
import classNames from "classnames";

import FormControl from "@mui/material/FormControl";
import TooltipQuantityText from "./tooltipText";
import TooltipContainer from "@common/curtainBuilder/components/formUI/components/tooltip";
import RadioGroupContainer from "@common/curtainBuilder/components/formUI/components/radioGroup";
import SelectContainer from "@common/curtainBuilder/components/formUI/components/select";
import InputField from "@common/curtainBuilder/components/formUI/components/input";
import { WindowTypeEnum, WindowQuantityEnum } from "../types";
import { WINDOW_TYPE, WINDOW_QUANTITY } from "../constants";
import style from "../styles/window.module.scss";

const WindowStep = () => {
  const { values, setValues } = useFormikContext<FormikValues>();
  const [isTypeEmpty, setIsTypeEmpty] = useState(true);
  const [isDistanceDisabled, setIsDistanceDisabled] = useState(true);
  const [isTripleLeaf, setIsTripleLeaf] = useState(false);

  const getImagePath = (): string => {
    const { singleLeaf, doubleLeaf, tripleLeaf } = WindowTypeEnum;
    const { single, double } = WindowQuantityEnum;

    switch (values.type) {
      case singleLeaf:
        return values.quantity === single
          ? `${singleLeaf}-${single}.png`
          : `${singleLeaf}-${double}.png`;
      case doubleLeaf:
        return values.quantity === single
          ? `${doubleLeaf}-${single}.png`
          : `${doubleLeaf}-${double}.png`;
      case tripleLeaf:
        return `${tripleLeaf}-${single}.png`;
      default:
        return `${doubleLeaf}-${double}.png`;
    }
  };

  const handleSelectOptions = (e: React.FormEvent<HTMLFormElement>) => {
    const { value } = e.target.dataset;
    //If no value in select disable all inputs
    if (!value) {
      setIsTypeEmpty(true);
    } else {
      setIsTypeEmpty(false);
    }

    //If window is tripleleaf hide distance input and disable radiobuttons
    if (value === WindowTypeEnum.tripleLeaf) {
      setIsDistanceDisabled(true);
      setIsTripleLeaf(true);
      setValues({ ...values, quantity: WindowQuantityEnum.single }); // change quantity to 1 when it is tripleleaf window
    } else {
      setIsDistanceDisabled(false);
      setIsTripleLeaf(false);
    }
  };

  const handleRadioButtonOptions = (e: React.FormEvent<HTMLFormElement>) => {
    const { value } = e.target;

    if (value == WindowQuantityEnum.single) {
      setIsDistanceDisabled(true);
    } else {
      setIsDistanceDisabled(false);
    }
  };

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
          <SelectContainer
            name="type"
            defaultValue=""
            content={WINDOW_TYPE}
            handleSelectOptions={handleSelectOptions}
          />
        </FormControl>

        <FormControl className={style.sidebar__block}>
          <TooltipContainer
            title="Количество окон"
            text={TooltipQuantityText}
          />

          <RadioGroupContainer
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
