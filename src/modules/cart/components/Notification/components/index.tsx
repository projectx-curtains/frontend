import Button from "@mui/material/Button";
import SuccessfullyIcon from "@assets/svg/successfully-icon.svg";
import SuccessfullyIconMobile from "@assets/svg/successfully-icon-mobile.svg";
import style from "../styles/index.module.scss";

const Notification: React.FC = () => {
  return (
    <div className={style["notification"]}>
      <p className={style["notification__title"]}>Спасибо !</p>
      <div className={style["notification__wrapper-subtitle"]}>
        <p className={style["subtitle"]}>Ваш заказ успешно оформлен</p>
        <SuccessfullyIcon className={style["icon"]} />
        <SuccessfullyIconMobile className={style["icon-mobile"]} />
      </div>
      <p className={style["notification__info"]}>
        Пожалуйста, ожидайте звонка специалиста для уточнения деталей заказа.
      </p>
      <div className={style["notification__wrapper-button"]}>
        <Button
          className={style["catalogue"]}
          href="/catalogue"
          variant="contained">
          Каталог
        </Button>
        <Button
          className={style["main"]}
          href="/"
          variant="contained">
          На главную
        </Button>
      </div>
    </div>
  );
};
export default Notification;
