import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFormikContext, FormikValues } from "formik";
import Board from "../components";
import { loadImage } from "../utils";
import { IBoardContainer, ImageDimensionsType } from "../interfaces";
import { CorniceTypeEnum } from "@modules/curtainBuilder/components/steps/cornice/types";

const BoardContainer: React.FC<IBoardContainer> = ({
  curtain,
  chosenColors,
}) => {
  const { values } = useFormikContext<FormikValues>();
  const svgRef = useRef<SVGSVGElement>(null);
  const [imageDimensions, setImageDimensions] = useState(
    {} as ImageDimensionsType
  );

  const getBackgroungPath = (): string => {
    return `curtain-${values.typeWindow}-${values.quantityWindow}-${values.typeCornice}.png`;
  };

  const getCurtainPath = useCallback((): string => {
    return `${values.typeCurtain}/${values.typeWindow + values.quantityWindow}`;
  }, [values]);

  const getCurtainBackgroundPath = (): string => {
    //TODO: sections
    const path = `/img/Builder/Curtains/${values.typeCurtain}/${
      values.typeWindow + values.quantityWindow
    }/background`;

    if (values.sectionQuantityCurtain) {
      return (
        path +
        `-${values.sectionDirectionCurtain}-${values.sectionQuantityCurtain}`
      );
    } else {
      return path;
    }
  };

  const getCorniceImageName = (): string => {
    if (values.typeCornice === CorniceTypeEnum.ceiling) {
      return `${values.typeWindow + values.quantityWindow}`;
    }
    return "";
  };

  useEffect(() => {
    let imageUrl = `/img/Builder/Curtains/${getCurtainPath()}/curtain.svg`;
    loadImage(setImageDimensions, imageUrl);
  }, [getCurtainPath]);

  useEffect(() => {
    if (svgRef && svgRef.current && chosenColors.length > 0) {
      const paths = svgRef.current.querySelectorAll("use");
      console.log(chosenColors);
      //if curtain consists of 2 parts
      if (paths.length / 2) {
        for (let i = 0; i < paths.length / 2; i++) {
          paths[i].setAttribute(
            "style",
            `fill:${chosenColors[i].color || "white"}`
          );
          paths[paths.length / 2 + i].setAttribute(
            "style",
            `fill:${chosenColors[i].color || "white"}`
          );
        }
      } else {
        //if curtain has only 1 part
        for (let i = 0; i < paths.length; i++) {
          paths[i].setAttribute(
            "style",
            `fill:${chosenColors[i].color || "white"}`
          );
        }
      }
    }
  }, [values, chosenColors]);

  return (
    <Board
      svgRef={svgRef}
      curtain={curtain}
      ceilingCornice={getCorniceImageName()}
      sectionQuantity={values.sectionQuantityCurtain}
      isSingleCurtain={!(values.quantityCurtain > 1)}
      getBackgroungPath={getBackgroungPath}
      getCurtainPath={getCurtainPath}
      curtainBackgroundPath={getCurtainBackgroundPath()}
      curtainImageDimensions={imageDimensions}
      typeWindow={values.typeWindow}
      quantityWindow={values.quantityWindow}
    />
  );
};

//todo: get rid of typeWindow and quantityWindow

export default BoardContainer;
