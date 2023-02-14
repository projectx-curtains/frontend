import { FormikValues, useFormikContext } from "formik";
import {
  WindowQuantityEnum,
  WindowTypeEnum,
} from "@modules/curtainBuilder/components/steps/window/types";
import { CurtainTypeEnum } from "../../../types";
import { LoadImageType, UseCurtainImageWidthType } from "../interfaces";

export const loadImage: LoadImageType = (setImageDimensions, imageUrl) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width,
    });
  };
  img.onerror = (err) => {
    console.log("img error");
    console.error(err);
  };

  console.log(img.height);
};

export const getCurtainImageWidth: UseCurtainImageWidthType = (
  width,
  curtainName,
  isSingleCurtain,
  typeWindow,
  quantityWindow
) => {
  switch (curtainName) {
    case (CurtainTypeEnum.austrian,
    CurtainTypeEnum.english,
    CurtainTypeEnum.french,
    CurtainTypeEnum.imperial):
      return width;
    case CurtainTypeEnum.classic:
      return isSingleCurtain ? width / 2 : width;
    case (CurtainTypeEnum.crossed, CurtainTypeEnum.italian):
      typeWindow === WindowTypeEnum.doubleLeaf &&
      quantityWindow === WindowQuantityEnum.double &&
      isSingleCurtain
        ? width / 2
        : width;
    case CurtainTypeEnum.romian:
      quantityWindow === WindowQuantityEnum.double && isSingleCurtain
        ? width / 2
        : width;
    default:
      return width;
  }
};
