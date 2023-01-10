import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { cardData } from "../mocks/cardData";
import { tooltipText } from "../mocks/tooltipText";
import LogoPrice from "@assets/svg/logoPriceCardPage.svg";

import style from "../styles/index.module.scss";

const DescriptionCard: React.FC = () => {
  const [clickButtonAdd, setClickButtonAdd] = useState(false);
  const onClickAdd = () => {
    setClickButtonAdd(true);
  };

  return (
    <div className={style["description-card"]}>
      <h1 className={style["description-card__title"]}>{cardData.title}</h1>
      <p className={style["description-card__subtitle"]}>{cardData.subtitle}</p>
      <div className={style["description-card__price"]}>
        <span className={style["price"]}>{cardData.price}</span>
        <Tooltip
          title={tooltipText}
          placement="right-start"
          arrow
          //
          // ----------------------------не работает цвет
          //
          sx={{
            "& .MuiTooltip-tooltip": {
              backgroundColor: "#FFFFFF",
            },
          }}>
          <div>
            <LogoPrice />
          </div>
        </Tooltip>
      </div>
      <div className={style["description-card__buttons"]}>
        <Button
          className={style["button-buy"]}
          href="/basket"
          variant="contained">
          Купить сейчас
        </Button>
        <Button
          className={style["button-add"]}
          variant="outlined"
          onClick={onClickAdd}>
          {clickButtonAdd ? "Товар в корзине" : "Добавить в Мои заказы"}
        </Button>
      </div>
    </div>
  );
};
export default DescriptionCard;
