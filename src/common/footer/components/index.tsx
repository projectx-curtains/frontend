import React from "react";
import Link from "next/link";
import classNames from "classnames";

import Accordion from "./accordion";
import { ROUTES } from "@constants/routes";
import { CONTACTS } from "@constants/contacts";

import LocationIcon from "@assets/svg/location.svg";
import InstagramIcon from "@assets/svg/insta.svg";
import PhoneIcon from "@assets/svg/phone.svg";

import style from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer id="footer" className={style.footer}>
      <div className={classNames("container", style.footer__container)}>
        <div
          className={classNames(
            style.footer__logo,
            style.logo,
            style["logo--dark"]
          )}
        ></div>

        <nav className={style.nav}>
          <Accordion title="О компании" className={style.nav__accordion}>
            <ul className={style.nav__list}>
              <li className={style.nav__item}>
                <Link href={ROUTES.catalogue}>
                  <a className={style.nav__link}>Каталог</a>
                </Link>
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.curtainBuilder}>
                  <a className={style.nav__link}>Конструктор</a>
                </Link>
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.consultation}>
                  <a className={style.nav__link}>Консультация</a>
                </Link>
              </li>
              <li className={style.nav__item}>
                <a href="#our-works" className={style.nav__link}>
                  Наши работы
                </a>
              </li>
            </ul>
          </Accordion>
          <Accordion title="Покупателям" className={style.nav__accordion}>
            <ul className={style.nav__list}>
              <li className={style.nav__item}>
                <Link href={ROUTES.consultation}>
                  <a className={style.nav__link}>Оплата</a>
                </Link>
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.consultation}>
                  <a className={style.nav__link}>Доставка</a>
                </Link>
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.consultation}>
                  <a className={style.nav__link}>Возврат</a>
                </Link>
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.consultation}>
                  <a className={style.nav__link}>Как сделать заказ</a>
                </Link>
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.consultation}>
                  <a className={style.nav__link}>Как выбрать шторы</a>
                </Link>
              </li>
            </ul>
          </Accordion>
        </nav>

        <div className={style.contacts}>
          <p className={style.contacts__heading}>Контакты</p>
          <div className={style.contacts__wrapper}>
            <LocationIcon
              className={classNames(
                style.contacts__icon,
                style["contacts__icon--place"]
              )}
            />
            <a
              href={CONTACTS.addressLink}
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                style.contacts__text,
                style.contacts__place
              )}
            >
              {CONTACTS.address}
            </a>
          </div>

          {CONTACTS.phones.map((phone) => (
            <div key={phone} className={style.contacts__wrapper}>
              <PhoneIcon className={style.contacts__icon} />
              <p
                className={classNames(
                  style.contacts__text,
                  style.contacts__phone
                )}
              >
                {phone}
              </p>
            </div>
          ))}

          <p className={style.contacts__heading}>Подписывайтесь на нас!</p>
          <a
            href={CONTACTS.insta}
            target="_blank"
            rel="noopener noreferrer"
            className={style.contacts__wrapper}
          >
            <InstagramIcon className={style.contacts__icon} />
            <p
              className={classNames(
                style.contacts__text,
                style.contacts__instagram
              )}
            >
              Instagram
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
