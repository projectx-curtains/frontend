import { useFormikContext, FormikValues } from "formik";
import CorniceStep from "../components";
import { CorniceTypeEnum } from "../types";

const CorniceStepContainer = () => {
  const { values } = useFormikContext<FormikValues>();

  const getImagePath = (): string => {
    return values.typeCornice
      ? `${values.typeWindow}-${values.quantityWindow}-${values.typeCornice}.png`
      : `${values.typeWindow}-${values.quantityWindow}-${CorniceTypeEnum.ceiling}.png`;
  };

  return <CorniceStep getImagePath={getImagePath} />;
};

export default CorniceStepContainer;
