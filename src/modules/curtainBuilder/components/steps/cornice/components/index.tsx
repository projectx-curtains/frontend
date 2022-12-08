import { RadioGroupField } from "@common/formUI/components/radioGroup";
import { InputField } from "@common/formUI/components/input";
import FormControl from "@mui/material/FormControl";
import { ICorniceStep } from "../interfaces";
import { CorniceTypeEnum } from "../types";
import { CORNICE_TYPE } from "../constants";
import style from "../../../../styles/builder.module.scss";

const CorniceStep: React.FC<ICorniceStep> = ({ getImagePath }) => {
  return (
    <div className={style.builder}>
      <div
        className={style.builder__board}
        style={{
          backgroundImage: `url("/img/Builder/cornice/${getImagePath()}")`,
        }}
      ></div>
      <div className={style.sidebar}>
        <h2 className={style.sidebar__heading}>Параметры карниза</h2>
        <FormControl className={style.sidebar__block}>
          <p className={style.sidebar__text}>Вид карниза</p>

          <RadioGroupField
            name="typeCornice"
            defaultValue={CorniceTypeEnum.ceiling}
            content={CORNICE_TYPE}
          />
        </FormControl>

        <div className={style.sidebar__block}>
          <p className={style.sidebar__text}>Размеры окна</p>
          <FormControl>
            <p className={style.sidebar__label}>Ширина, см</p>
            <InputField name="widthCornice" />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default CorniceStep;
