import classNames from "classnames";
import Tooltip from "@mui/material/Tooltip";
import { IColorPicker } from "../interfaces";
import { COLORS } from "../constants";
import style from "../styles/colorPicker.module.scss";

const ColorPicker: React.FC<IColorPicker> = ({
  getTooltipPlacement,
  handleColorButton,
}) => {
  return (
    <div className={style.colors}>
      {COLORS.map(({ tints }, itemY) =>
        tints.map(({ title, color }, itemX) => (
          <Tooltip
            key={color}
            title={title}
            placement={getTooltipPlacement(itemX, itemY)}
            componentsProps={{
              tooltip: {
                className: classNames(
                  style.tooltip__popper,
                  style[`tooltip__popper--${getTooltipPlacement(itemX, itemY)}`]
                ),
              },
            }}
          >
            <div
              className={style.colors__item}
              style={{ backgroundColor: color }}
              onClick={() => handleColorButton(color)}
            ></div>
          </Tooltip>
        ))
      )}
    </div>
  );
};

export default ColorPicker;
