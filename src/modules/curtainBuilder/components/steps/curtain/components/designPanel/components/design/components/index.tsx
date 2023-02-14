import classNames from "classnames";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { SelectField } from "@common/formUI/components/select";
import { TooltipField } from "@common/formUI/components/tooltip";
import TooltipDesignText from "./tooltipText";
import { IDesign } from "../interfaces";
import { TabsEnum } from "../../../../../types";
import {
  CURTAIN_DESIGN,
  SECTION_DIRECTION,
  SECTION_QUANTITY,
} from "../constants";
import style from "@modules/curtainBuilder/styles/builder.module.scss";
import designStyle from "../styles/design.module.scss";

const Design: React.FC<IDesign> = ({
  chosenColors,
  handleColorEdit,
  handleSelectDesign,
  handleSelectSectionQuantity,
  isCombined,
}) => {
  return (
    <>
      <FormControl className={style.sidebar__block}>
        <TooltipField title="Дизайн" text={TooltipDesignText} />

        <SelectField
          name="designCurtain"
          defaultValue=""
          content={CURTAIN_DESIGN}
          handleSelectOptions={handleSelectDesign}
        />
      </FormControl>

      <FormControl
        className={classNames(style.sidebar__block, {
          [style["sidebar__block--hidden"]]: !isCombined,
        })}
      >
        <p className={style.sidebar__text}>Направление сечения</p>

        <SelectField
          name="sectionDirectionCurtain"
          defaultValue=""
          content={SECTION_DIRECTION}
          // handleSelectOptions={handleSelectOptionsType}
        />
      </FormControl>

      <FormControl
        className={classNames(style.sidebar__block, {
          [style["sidebar__block--hidden"]]: !isCombined,
        })}
      >
        <p className={style.sidebar__text}>Количество сечения</p>

        <SelectField
          name="sectionQuantityCurtain"
          defaultValue=""
          content={SECTION_QUANTITY}
          handleSelectOptions={handleSelectSectionQuantity}
        />
      </FormControl>

      <div className={style.sidebar__block}>
        <p className={style.sidebar__text}>Цвет</p>
        {chosenColors.map((chosenColor, colorIndex) => (
          <div key={chosenColor}>
            <Button
              className={designStyle.design__button}
              onClick={() => handleColorEdit(colorIndex)}
              style={{ backgroundColor: chosenColor }}
            ></Button>
            <span className={designStyle.design__text}>
              Цвет #{colorIndex + 1}
            </span>
          </div>
        ))}

        {/* {(sectionQuantity || chosenColors.length < sectionQuantity) && (
          <>
            <Button
              className={designStyle.design__button}
              onClick={() => {
                setChosenTab((chosenTab) => (chosenTab = TabsEnum.colorPicker));
                setIsColorEdit(false);
              }}
            >
              <AddIcon className={designStyle.design__icon} />
            </Button>
            <span className={designStyle.design__text}>Добавить цвет</span>
          </>
        )} */}
      </div>
    </>
  );
};

export default Design;
