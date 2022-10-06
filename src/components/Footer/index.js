import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../Accordion";
import { ReactComponent as LocationIcon } from "../../assets/svg/location.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/insta.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svg/phone.svg";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer__container">
        <div className="footer__logo logo logo--dark"></div>

        <nav className="nav">
          <Accordion
            title="О компании"
            onlyForMobile={true}
            className="nav__accordion"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/catalogue" className="nav__link">
                  Каталог
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/curtain-builder" className="nav__link">
                  Конструктор
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/consultation" className="nav__link">
                  Консультация
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/our-works" className="nav__link">
                  Наши работы
                </Link>
              </li>
            </ul>
          </Accordion>
          <Accordion
            title="Покупателям"
            onlyForMobile={true}
            className="nav__accordion"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/consultation" className="nav__link">
                  Оплата
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/consultation" className="nav__link">
                  Доставка
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/consultation" className="nav__link">
                  Возврат
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/consultation" className="nav__link">
                  Как сделать заказ
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/consultation" className="nav__link">
                  Как выбрать шторы
                </Link>
              </li>
            </ul>
          </Accordion>
        </nav>

        <div className="contacts">
          <p className="contacts__heading">Контакты</p>
          <div className="contacts__wrapper">
            <LocationIcon className="contacts__icon contacts__icon--place" />
            <a
              href="https://yandex.by/maps/-/CCUVqWsOKA"
              target="_blank"
              rel="noopener noreferrer"
              className="contacts__text contacts__place"
            >
              г. Могилёв, ул. Быховская 6, пав.256 (Могилёвский рынок)
            </a>
          </div>
          <div className="contacts__wrapper">
            <PhoneIcon className="contacts__icon" />
            <p className="contacts__text contacts__phone">
              +375 (29) 644 87 47
            </p>
          </div>
          <div className="contacts__wrapper">
            <PhoneIcon className="contacts__icon" />
            <p className="contacts__text contacts__phone">
              +375 (29) 745 87 47
            </p>
          </div>

          <p className="contacts__heading">Подписывайтесь на нас!</p>
          <a
            href="https://instagram.com/zashtorim.by?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
            className="contacts__wrapper"
          >
            <InstagramIcon className="contacts__icon" />
            <p className="contacts__text contacts__instagram">Instagram</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
