import Button from "@mui/material/Button";
import { useState } from "react";
import Notification from "../../Notification";
import { IOrderingModuleProps } from "../interfaces";
import OrderInfoIcon from "@assets/svg/order-info-icon.svg";
import Modal from "@mui/material/Modal";

import style from "../styles/index.module.scss";

const OrderingModule: React.FC<IOrderingModuleProps> = ({
  number,
  address,
  price,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={style["ordering-module"]}>
      <p className={style["ordering-module__title"]}>Общая сумма корзины</p>
      <div className={style["ordering-module__wrapper-info"]}>
        <div className={style["item"]}>
          <p className={style["item__title"]}>Товары</p>
          <p className={style["item__text"]}>{`${number} шт.`}</p>
        </div>
        <div className={style["item"]}>
          <p className={style["item__title"]}>Доставка</p>
          <p className={style["item__text"]}>{address}</p>
        </div>
      </div>
      <div className={style["ordering-module__wrapper-price"]}>
        <p className={style["price-item"]}>Итого</p>
        <p className={style["price-item"]}>{`от ${price} BYN`}</p>
      </div>
      <div className={style["ordering-module__wrapper-description"]}>
        <div>
          <OrderInfoIcon />
        </div>

        <p className={style["description-item"]}>
          <b className={style["bold"]}>Итоговая цена</b> заказа будет Вам
          сообщена нашим специалистом после уточнения всех деталей.
        </p>
      </div>
      <Button
        className={style["ordering-module__button"]}
        variant="contained"
        type="submit"
        onClick={() => handleOpen()}>
        Оформить заказ
      </Button>
      <Modal
        open={open}
        onClose={() => handleClose()}>
        <Notification />
      </Modal>
    </div>
  );
};
export default OrderingModule;
