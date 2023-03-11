import React from "react";
import classNames from "classnames";
import Image from "next/future/image";
import CurtainPart from "./curtainPart";
import { getCurtainImageWidth } from "../utils";
import { IBoard } from "../interfaces";
import { CORNICE_WIDTH } from "../constants";
import style from "../../../../../../styles/builder.module.scss";
import curtainStyle from "../../../styles/curtain.module.scss";
import { CurtainTypeEnum } from "../../../types";

const Board: React.FC<IBoard> = ({
  svgRef,
  curtain,
  ceilingCornice,
  sectionQuantity,
  isSingleCurtain,
  getBackgroungPath,
  getCurtainPath,
  curtainBackgroundPath,
  curtainImageDimensions,
  typeWindow,
  quantityWindow,
}) => {
  return (
    <div
      className={style.builder__board}
      style={{
        backgroundImage: `url("/img/Builder/curtainBackground/${getBackgroungPath()}")`,
      }}>
      {curtain && (
        <div className={curtainStyle.curtain__image}>
          {ceilingCornice && (
            <Image
              src={`/img/Builder/cornice/${ceilingCornice}.svg`}
              alt="Корниз"
              width={CORNICE_WIDTH[ceilingCornice] || 0}
              height="27"
              className={curtainStyle.curtain__cornice}
            />
          )}
          <Image
            src={`/img/Builder/Curtains/${getCurtainPath()}/curtain.svg`}
            alt="Штора"
            width={
              getCurtainImageWidth(
                curtainImageDimensions.width,
                curtain,
                isSingleCurtain,
                typeWindow,
                quantityWindow
              ) || 0
            }
            height={curtainImageDimensions.height || 0}
            className={classNames(curtainStyle.curtain__overlay, {
              [curtainStyle["curtain__overlay--single"]]:
                isSingleCurtain &&
                curtain === (CurtainTypeEnum.classic || CurtainTypeEnum.thread),
            })}
            style={{
              left:
                isSingleCurtain &&
                curtain === (CurtainTypeEnum.classic || CurtainTypeEnum.thread)
                  ? `calc(50% - ${+curtainImageDimensions.width / 2}px)`
                  : 0,
            }}
          />
          <svg
            width={curtainImageDimensions.width || 0}
            height={curtainImageDimensions.height || 0}
            viewBox={`0 0 ${curtainImageDimensions.width} ${curtainImageDimensions.height}`}
            className={curtainStyle.curtain__background}
            ref={svgRef}>
            <CurtainPart
              side="left"
              sectionQuantity={sectionQuantity}
              curtainBackgroundPath={curtainBackgroundPath}
            />
            {!isSingleCurtain && (
              <CurtainPart
                side="right"
                sectionQuantity={sectionQuantity}
                curtainBackgroundPath={curtainBackgroundPath}
              />
            )}
          </svg>
        </div>
      )}
    </div>
  );
};

export default Board;
