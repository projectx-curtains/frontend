import { useEffect } from "react";
import { useFormikContext } from "formik";

export const FormStepContainer = ({ stepName = "", children }: any) => {
  const formik = useFormikContext();

  useEffect(() => {
    formik.validateForm();
  }, [stepName]);

  return children;
};
