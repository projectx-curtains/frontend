import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { ITooltipField } from "../interfaces";
import style from "../styles/tooltip.module.scss";

const TooltipField: React.FC<ITooltipField> = ({ title, text }) => {
  return (
    <div className={style.tooltip}>
      <p className={style.tooltip__title}>{title}</p>
      <Tooltip
        className={style.tooltip__text}
        title={text}
        arrow
        componentsProps={{
          tooltip: {
            className: style.tooltip__popper,
          },
          arrow: {
            className: style.tooltip__arrow,
          },
        }}
      >
        <InfoOutlinedIcon className={style.tooltip__icon} />
      </Tooltip>
    </div>
  );
};

export default TooltipField;
