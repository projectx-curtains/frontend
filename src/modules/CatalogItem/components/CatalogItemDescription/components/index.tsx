import Tooltip from "@mui/material/Tooltip";

import ControlButtons from "../../ControlButtons";
import { cardData } from "../mocks/cardData";
import { tooltipText } from "../mocks/tooltipText";
import TooltipInfoIcon from "@assets/svg/tooltip-info-icon.svg";

import style from "../styles/index.module.scss";

const CatalogItemDescription: React.FC = () => {
  return (
    <div className={style["catalog-item-description"]}>
      <h1 className={style["catalog-item-description__title"]}>
        {cardData.title}
      </h1>
      <p className={style["catalog-item-description__subtitle"]}>
        {cardData.subtitle}
      </p>
      <div className={style["catalog-item-description__price"]}>
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
            "& .MuiTooltip-arrow": {
              color: "#FFFFFF",
            },
          }}>
          <div>
            <TooltipInfoIcon />
          </div>
        </Tooltip>
      </div>
      <ControlButtons />
    </div>
  );
};
export default CatalogItemDescription;
