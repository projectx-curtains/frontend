import classNames from "classnames";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Panel from "./panel";
import Heading from "./heading";
import { Board } from "./board";
import { Parameters } from "./parameters";
import { DesignPanel } from "./designPanel";
import { ICurtainStep } from "../interfaces";
import { TabsEnum } from "../types";

import style from "../../../../styles/builder.module.scss";
import curtainStyle from "../styles/curtain.module.scss";

const CurtainStep: React.FC<ICurtainStep> = ({
  chosenTab,
  curtain,
  setChosenTab,
  setCurtain,
  isParametersPanelValid,
  chosenColors,
  setChosenColors,
}) => {
  return (
    <div className={style.builder}>
      <Board curtain={curtain} chosenColors={chosenColors} />

      <div className={style.sidebar}>
        <Heading chosenTab={chosenTab} value={TabsEnum.parameters}>
          Параметры портьер
        </Heading>
        <Heading chosenTab={chosenTab} value={TabsEnum.design}>
          Дизайн портьер
        </Heading>
        <Heading chosenTab={chosenTab} value={TabsEnum.colorPicker}>
          <ArrowBackIcon
            className={style["sidebar__heading--icon"]}
            onClick={() => {
              setChosenTab((chosenTab) => (chosenTab = TabsEnum.design));
            }}
          />
          Выбор цвета
        </Heading>

        <Tabs
          variant="fullWidth"
          value={chosenTab}
          onChange={(e, value) => {
            if (isParametersPanelValid) {
              setChosenTab(value);
            }
          }}
          aria-label="nav tabs example"
          className={classNames(curtainStyle.curtain__tabs, {
            [curtainStyle["curtain__tabs--hidden"]]:
              chosenTab === TabsEnum.colorPicker,
          })}
          TabIndicatorProps={{
            style: { display: "none" },
          }}
        >
          <Tab label="Параметры" className={curtainStyle.curtain__tab} />
          <Tab label="Дизайн" className={curtainStyle.curtain__tab} />
        </Tabs>

        <Panel chosenTab={chosenTab} value={TabsEnum.parameters}>
          <Parameters isChosenCurtain={!!curtain} setCurtain={setCurtain} />
        </Panel>
        <DesignPanel
          chosenTab={chosenTab}
          setChosenTab={setChosenTab}
          chosenColors={chosenColors}
          setChosenColors={setChosenColors}
        />
      </div>
    </div>
  );
};

export default CurtainStep;
