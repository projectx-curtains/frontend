import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  DataProcessingCheckbox,
  TextFieldComment,
  TextFieldPersonalInformation,
} from "../../CardProduct/fields";
import style from "../styles/index.module.scss";

const PersonalInformation: React.FC = () => {
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
          <TextFieldPersonalInformation
            name="name"
            placeholder="Имя"
          />
        </div>
        <div className={style["personal-information__wrapper-phone"]}>
          <p className={style["title"]}>Номер телефона</p>
          <TextFieldPersonalInformation
            name="phone"
            placeholder="+375"
          />
        </div>
        <div className={style["personal-information__wrapper-email"]}>
          <p className={style["title"]}>Email</p>
          <TextFieldPersonalInformation
            name="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className={style["personal-information__wrapper-comment"]}>
        <p className={style["title"]}>Комментарий</p>
        <TextFieldComment
          name="comment"
          value={commentValue}
          onChange={handleChange}
        />
        <p
          className={
            style["character-count"]
          }>{`${commentValue.length}/220`}</p>
      </div>
      <FormControlLabel
        control={<DataProcessingCheckbox name="dataProcessing" />}
        label={
          <p className={style["personal-information__data-processin-text"]}>
            Я согласен на обработку персональных данных в соответствии с{" "}
            <a
              href="#"
              className={style["link"]}>
              политикой.
            </a>
          </p>
        }
      />
      <p className={style["personal-information__subtitle"]}>
        Менеджер свяжется с Вами{" "}
        <b className={style["bold"]}>в течение суток.</b>
      </p>
    </div>
  );
};
export default PersonalInformation;
