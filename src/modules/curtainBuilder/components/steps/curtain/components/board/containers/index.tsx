import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFormikContext, FormikValues } from "formik";
import Board from "../components";
import { loadImage } from "../utils";
import { IBoardContainer, ImageDimensionsType } from "../interfaces";

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

  useEffect(() => {
    let imageUrl = `/img/Builder/Curtains/${getCurtainPath()}/curtain.svg`;
    loadImage(setImageDimensions, imageUrl);
  }, [getCurtainPath]);

  useEffect(() => {
    if (svgRef && svgRef.current && values.sectionQuantityCurtain) {
      const paths = svgRef.current.querySelectorAll("use");

      for (let i = 0; i < paths.length / 2; i++) {
        paths[i].setAttribute("style", `fill:${chosenColors[i] || "white"}`);
        paths[paths.length / 2 + i].setAttribute(
          "style",
          `fill:${chosenColors[i] || "white"}`
        );
      }

      // for (let i = paths.length - 1; i >= paths.length / 2; i--) {
      //   paths[i].setAttribute("style", `fill:${chosenColors[i] || "white"}`);
      // }
    }
  }, [values, chosenColors]);

  return (
    <Board
      svgRef={svgRef}
      curtain={curtain}
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

export default BoardContainer;
