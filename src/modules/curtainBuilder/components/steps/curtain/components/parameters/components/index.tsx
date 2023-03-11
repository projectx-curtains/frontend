import { InputField } from "@common/formUI/components/input";
import { SelectField } from "@common/formUI/components/select";
import FormControl from "@mui/material/FormControl";
import { TooltipField } from "@common/formUI/components/tooltip";
import TooltipSizeQuantityText from "./tooltipText";
import { IParameters } from "../interfaces";
import { CURTAIN_MATERIAL, CURTAIN_TYPE } from "../../../constants";
import style from "../../../../../../styles/builder.module.scss";

const Parameters: React.FC<IParameters> = ({
  isTypeEmpty,
  isQuantityDisabled,
  handleSelectOptionsType,
}) => {
  return (
    <>
      <FormControl className={style.sidebar__block}>
        <p className={style.sidebar__text}>Вид портьер</p>

        <SelectField
          name="typeCurtain"
          defaultValue=""
          content={CURTAIN_TYPE}
          handleSelectOptions={handleSelectOptionsType}
        />
      </FormControl>

      <FormControl className={style.sidebar__block}>
        <p className={style.sidebar__text}>Вид ткани</p>

        <SelectField
          name="materialCurtain"
          defaultValue=""
          content={CURTAIN_MATERIAL}
        />
      </FormControl>

      <div className={style.sidebar__block}>
        <TooltipField
          title="Размеры окна и количество"
          text={TooltipSizeQuantityText}
          placement="bottom-end"
        />

        <div className={style["sidebar__block-sizing"]}>
          <FormControl>
            <p className={style.sidebar__label}>Ширина, см</p>
            <InputField
              name="widthCurtain"
              disabled={isTypeEmpty}
            />
          </FormControl>
          <FormControl>
            <p className={style.sidebar__label}>Высота, см</p>
            <InputField
              name="heightCurtain"
              disabled={isTypeEmpty}
            />
          </FormControl>
          <FormControl>
            <p className={style.sidebar__label}>Количество</p>
            <InputField
              name="quantityCurtain"
              type="number"
              min="1"
              max="2"
              disabled={isTypeEmpty || isQuantityDisabled}
            />
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default Parameters;
