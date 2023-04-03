import Button from "@mui/material/Button";
import { catalogItemContext } from "@common/contexts/catalogItemContext/components";
import { useContext } from "react";

import style from "../styles/index.module.scss";

const ControlButtons: React.FC = () => {
  const { catalogItemContextValue, setCatalogItemContextValue } =
    useContext(catalogItemContext);

  const onClickAdd = () => {
    setCatalogItemContextValue(true);
  };
  return (
    <div className={style["control-buttons"]}>
      <Button
        className={style["control-buttons__buy"]}
        href="/cart"
        variant="contained">
        Купить сейчас
      </Button>
      <Button
        className={style["control-buttons__add"]}
        variant="outlined"
        onClick={onClickAdd}>
        {catalogItemContextValue ? "Товар в корзине" : "Добавить в Мои заказы"}
      </Button>
    </div>
  );
};
export default ControlButtons;
