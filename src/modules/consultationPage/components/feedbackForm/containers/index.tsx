import { useState } from "react";
import { useFormik } from "formik";
import FeedbackForm from "../components";
import { validationSchema } from "../validation";
import { maxSymbols } from "../constatns";

const FeedbackFormContainer: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      comment: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationSchema,
  });

  const [commentValue, setCommentValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < maxSymbols + 1) {
      setCommentValue(event.target.value);
    }
  };

  const props = { formik, commentValue, handleChange };

  return <FeedbackForm {...props} />;
};

export default FeedbackFormContainer;
