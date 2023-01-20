// import { useField } from "formik";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import style from "../styles/index.module.scss";

const PersonalInformation: React.FC = () => {
  // const [field] = useField("initialValues");

  const [commentValue, setCommentValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 221) {
      setCommentValue(event.target.value);
    }
  };
  return (
    <div className={style["personal-information"]}>
      <h1 className={style["personal-information__title"]}>
        Личная информация
      </h1>
      <div className={style["personal-information__wrapper-info"]}>
        <div className={style["personal-information__wrapper-name"]}>
          <p className={style["title"]}>Имя</p>
          <TextField
            placeholder="Имя"
            sx={{
              "& .MuiInputBase-input": { padding: "10px 16px" },
            }}
          />
        </div>
        <div className={style["personal-information__wrapper-phone"]}>
          <p className={style["title"]}>Номер телефона</p>
          <TextField
            // {...field}
            placeholder="+375"
            sx={{
              "& .MuiInputBase-input": { padding: "10px 16px" },
            }}
          />
        </div>
        <div className={style["personal-information__wrapper-email"]}>
          <p className={style["title"]}>Email</p>
          <TextField
            // {...field}
            placeholder="Email"
            sx={{
              "& .MuiInputBase-input": { padding: "10px 16px" },
            }}
          />
        </div>
      </div>
      <div className={style["personal-information__wrapper-comment"]}>
        <p className={style["title"]}>Комментарий</p>
        {/* не нашел ограничение по количеству символов maxlength="220" и как вывести количество символов ниже ------!!! */}
        <TextField
          // {...field}
          placeholder="Комментарий"
          multiline
          rows={4}
          maxRows={4}
          value={commentValue}
          onChange={handleChange}
        />
        <p
          className={
            style["character-count"]
          }>{`${commentValue.length}/220`}</p>
      </div>
      <p className={style["personal-information__subtitle"]}>
        Менеджер свяжется с Вами{" "}
        <b className={style["bold"]}>в течение суток.</b>
      </p>
    </div>
  );
};
export default PersonalInformation;
