import { useFormik } from "formik";
import { validationSchema } from "../validation";
import CartModule from "..";
import { useState } from "react";

const CartModuleContainer: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      widthWindow: 0,
      heightWindow: 0,
      countQuantity: 1,
      address: "",
      name: "",
      phone: "",
      email: "",
      comment: "",
      dataProcessing: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationSchema,
  });

  let [countQuantity, setCountQuantity] = useState(
    formik.initialValues.countQuantity
  );
  const onAdd = () => {
    setCountQuantity(countQuantity++);
  };
  const onReduct = () => {
    countQuantity === 1 ? countQuantity : setCountQuantity(countQuantity--);
  };

  const props = {
    formik,
    onAdd,
    onReduct,
  };
  return <CartModule {...props} />;
};
export default CartModuleContainer;
