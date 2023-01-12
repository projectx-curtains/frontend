import Button from "@mui/material/Button";
import { useState } from "react";

import style from "../styles/index.module.scss";

const ControlButtons: React.FC = () => {
  const [isItemAdded, setisItemAdded] = useState(false);
  const onClickAdd = () => {
    setisItemAdded(true);
  };
  return (
    <div className={style["control-buttons"]}>
      <Button
        className={style["control-buttons__buy"]}
        href="/basket"
        variant="contained">
        Купить сейчас
      </Button>
      <Button
        className={style["control-buttons__add"]}
        variant="outlined"
        onClick={onClickAdd}>
        {isItemAdded ? "Товар в корзине" : "Добавить в Мои заказы"}
      </Button>
    </div>
  );
};
export default ControlButtons;
