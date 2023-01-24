import FormControl from "@mui/material/FormControl";
import { InputAddress } from "../../CardProduct/fields";

import style from "../styles/index.module.scss";

const Address: React.FC = () => {
  return (
    <div className={style["address"]}>
      <h3 className={style["address__title"]}>Адрес доставки*</h3>
      <FormControl variant="outlined">
        <InputAddress name="address" />
      </FormControl>
      <p className={style["address__subtitle"]}>
        *Доставка только по Республике Беларусь. <br />
        По г.Могилёв доставка бесплатная. <br />В остальные города доставка
        осуществляется в отделения Европочты.
      </p>
    </div>
  );
};

export default Address;
