import TextField from "@mui/material/TextField";
import style from "../styles/index.module.scss";

const PersonalInformation = () => {
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
            placeholder="+375"
            sx={{
              "& .MuiInputBase-input": { padding: "10px 16px" },
            }}
          />
        </div>
        <div className={style["personal-information__wrapper-email"]}>
          <p className={style["title"]}>Email</p>
          <TextField
            placeholder="Email"
            sx={{
              "& .MuiInputBase-input": { padding: "10px 16px" },
            }}
          />
        </div>
      </div>
      <div className={style["personal-information__wrapper-comment"]}>
        <p className={style["title"]}>Комментарий</p>
        {/* не нашел ограничение по количеству символов maxlength="220" ------!!! */}
        <TextField
          placeholder="Комментарий"
          multiline
          rows={4}
          maxRows={4}
        />
        <p className={style["character-count"]}>0/220</p>
      </div>
      <p className={style["personal-information__subtitle"]}>
        Менеджер свяжется с Вами{" "}
        <b className={style["bold"]}>в течение суток.</b>
      </p>
    </div>
  );
};
export default PersonalInformation;
