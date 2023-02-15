import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState, useCallback } from "react";
import Notification from "../../Notification";
import { priseProduct } from "@modules/cart/constants";
import { IOrderProps } from "../interfaces";
import OrderInfoIcon from "@assets/svg/order-info-icon.svg";

import style from "../styles/index.module.scss";

const Order: React.FC<IOrderProps> = ({ countQuantity, address }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = (state: boolean) => {
    setModalOpen(state);
  };
  const CountQuantity = useCallback(() => {
    return <p className={style["item__text"]}>{`${countQuantity} шт.`}</p>;
  }, [countQuantity]);

  return (
    <div className={style["ordering-module"]}>
      <p className={style["ordering-module__title"]}>Общая сумма корзины</p>
      <div className={style["ordering-module__wrapper-info"]}>
        <div className={style["item"]}>
          <p className={style["item__title"]}>Товары</p>
          <CountQuantity />
        </div>
        <div className={style["item"]}>
          <p className={style["item__title"]}>Доставка</p>
          <p className={style["item__text"]}>{address}</p>
        </div>
      </div>
      <div className={style["ordering-module__wrapper-price"]}>
        <p className={style["price-item"]}>Итого</p>
        <p className={style["price-item"]}>{`от ${priseProduct} BYN`}</p>
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
        onClick={() => handleModal(true)}>
        Оформить заказ
      </Button>
      <Modal
        open={modalOpen}
        onClose={() => handleModal(false)}>
        <Notification />
      </Modal>
    </div>
  );
};
export default Order;
