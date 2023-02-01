import { useFormik } from "formik";
import { useState } from "react";
import { validationSchema } from "../validation";
import CartModule from "..";

const CartModuleContainer: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      widthWindow: 0,
      heightWindow: 0,
      // countQuantity: 1,
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

  let [countQuantity, setCountQuantity] = useState(1);
  const onAdd = () => {
    setCountQuantity(countQuantity++);
  };
  const onReduct = () => {
    countQuantity === 1 ? countQuantity : setCountQuantity(countQuantity--);
  };

  const props = {
    formik,
    countQuantity,
    onAdd,
    onReduct,
  };
  return <CartModule {...props} />;
};
export default CartModuleContainer;
