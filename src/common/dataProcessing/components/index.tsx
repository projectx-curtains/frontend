import { DataProcessingCheckbox } from "@modules/cart/components/CardProduct/fields";
import FormControlLabel from "@mui/material/FormControlLabel";

import style from "../styles/index.module.scss";

const DataProcessing = () => {
  return (
    <FormControlLabel
      control={<DataProcessingCheckbox name="dataProcessing" />}
      label={
        <p className={style["data-processin-text"]}>
          Я согласен на обработку персональных данных в соответствии с{" "}
          <a
            href="#"
            className={style["link"]}>
            политикой.
          </a>
        </p>
      }
    />
  );
};

export default DataProcessing;
