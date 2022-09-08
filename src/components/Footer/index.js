import React from 'react';
import { MdOutlinePlace, MdOutlinePhone} from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer__container">
        <div className="footer__logo logo logo--dark"></div>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
                <Link to="/catalogue"
                    className="nav__link">
                    Каталог
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/curtain-builder"
                    className="nav__link">
                    Конструктор
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/consultation"
                    className="nav__link">
                    Консультация
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/"
                    className="nav__link">
                    Контакты
                </Link>
            </li>
          </ul>

          <ul className="nav__list">
            <li className="nav__item">
                <Link to="/consultation"
                    className="nav__link">
                    Оплата
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/consultation"
                    className="nav__link">
                    Доставка
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/consultation"
                    className="nav__link">
                    Возврат
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/consultation"
                    className="nav__link">
                    Как сделать заказ
                </Link>
            </li>
            <li className="nav__item">
                <Link to="/consultation"
                    className="nav__link">
                    Как выбрать шторы
                </Link>
            </li>
          </ul>
        </nav>

        <div className="contacts">
          <p className="contacts__heading">Контакты</p>
          <div className="contacts__wrapper">
            <MdOutlinePlace className="contacts__icon contacts__icon--place" />
            <a
              href="https://yandex.by/maps/-/CCUVqWsOKA"
              target="_blank" 
              rel="noopener noreferrer"
              className="contacts__place">
              г. Могилёв, ул. Быховская 6, пав.256 (Могилёвский рынок)
            </a>
          </div>
          <div className="contacts__wrapper">
            <MdOutlinePhone className="contacts__icon" />
            <p className="contacts__phone">+375 (29) 644 87 47</p>
          </div>
          <div className="contacts__wrapper">
            <MdOutlinePhone className="contacts__icon" />
            <p className="contacts__phone">+375 (29) 745 87 47</p>
          </div>

          <p className='contacts__heading'>Подписывайтесь на нас!</p>
          <a 
            href="https://instagram.com/zashtorim.by?igshid=YmMyMTA2M2Y=" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contacts__wrapper">
            <IoLogoInstagram className="contacts__icon" />
            <p className='contacts__instagram'>
              Instagram
            </p>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
