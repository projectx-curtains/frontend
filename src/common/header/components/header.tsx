import React, { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

import Button from "@mui/material/Button";
import CataloguePopup from "./cataloguePopup";
import SearchBar from "./searchBar";

import { HEADER_THEME } from "../../../constants/header";
import { ROUTES } from "../../../constants/routes";
import { CATALOGUE } from "../../../constants/catalogue";
import { CONTACTS } from "../../../constants/contacts";

import InstagramIcon from "../../../../assets/svg/insta.svg";
import PhoneIcon from "../../../../assets/svg/phone.svg";
import { MdClose, MdOutlineLocalMall, MdOutlineNotes } from "react-icons/md";
import style from "../styles/header.module.scss";

const Header = () => {
  const colorSwitchPosition = 10;
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState(HEADER_THEME.transparent);

  const menuToggleHandler = () => {
    setMenuOpen((isOpen) => !isOpen);
    if (window.scrollY < colorSwitchPosition) {
      const currentTheme = menuOpen
        ? HEADER_THEME.transparent
        : HEADER_THEME.white;
      setHeaderTheme(currentTheme);
    }
  };

  const pageScrollHandler = () => {
    const currentTheme =
      window.scrollY > colorSwitchPosition
        ? HEADER_THEME.white
        : HEADER_THEME.transparent;
    setHeaderTheme(currentTheme);
  };

  useEffect(() => {
    window.addEventListener("scroll", pageScrollHandler);
  });

  return (
    <header
      className={classNames(style.header, style[`header--${headerTheme}`])}
    >
      <div className={classNames("container", style.header__content)}>
        <div className={style.header__toggle}>
          {!menuOpen ? (
            <MdOutlineNotes onClick={menuToggleHandler} />
          ) : (
            <MdClose onClick={menuToggleHandler} />
          )}
        </div>
        <Link href={ROUTES.home}>
          <a
            className={classNames(style.header__logo, style.logo, {
              [style["logo--dark"]]: menuOpen,
            })}
          ></a>
        </Link>
        {menuOpen ? (
          <nav className={classNames(style.nav, style["nav--open"])}>
            <ul className={classNames("container", style.nav__list)}>
              <li className={style.nav__item}>
                <SearchBar theme={headerTheme} menuOpen={menuOpen} />
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.catalogue}>
                  <a
                    className={classNames(
                      style.nav__link,
                      style["nav__link--heading"]
                    )}
                    onClick={menuToggleHandler}
                  >
                    Каталог
                  </a>
                </Link>
                <ul
                  className={classNames(
                    "container",
                    style.nav__list,
                    style.nav__sublist
                  )}
                >
                  {CATALOGUE.map(({ name, path }) => (
                    <li key={name} className={style.nav__item}>
                      <Link key={name} href={path}>
                        <a className={style.nav__link}>{name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.curtainBuilder}>
                  <a
                    className={classNames(
                      style.nav__link,
                      style["nav__link--heading"]
                    )}
                    onClick={menuToggleHandler}
                  >
                    Конструктор
                  </a>
                </Link>
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.consultation}>
                  <a
                    className={classNames(
                      style.nav__link,
                      style["nav__link--heading"]
                    )}
                    onClick={menuToggleHandler}
                  >
                    Консультация
                  </a>
                </Link>
              </li>
              <li className={classNames(style.nav__item, style.contacts)}>
                {CONTACTS.phones.map((phone) => (
                  <div key={phone} className={style.contacts__wrapper}>
                    <PhoneIcon className={style.contacts__icon} />
                    <p className={style.contacts__phone}>{phone}</p>
                  </div>
                ))}
                <a
                  href={CONTACTS.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classNames(
                    style.contacts__wrapper,
                    style["contacts__wrapper--insta"]
                  )}
                >
                  <InstagramIcon className={style.contacts__icon} />
                  <p className={style.contacts__instagram}>Instagram</p>
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              <li className={style.nav__item}>
                <Link href={ROUTES.catalogue}>
                  <a
                    id={style["catalogue-nav"]}
                    className={style.nav__link}
                    onClick={menuToggleHandler}
                  >
                    Каталог
                  </a>
                </Link>
                <CataloguePopup />
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.curtainBuilder}>
                  <a className={style.nav__link} onClick={menuToggleHandler}>
                    Конструктор штор
                  </a>
                </Link>
              </li>
              <li className={style.nav__item}>
                <Link href={ROUTES.consultation}>
                  <a className={style.nav__link} onClick={menuToggleHandler}>
                    Консультация
                  </a>
                </Link>
              </li>
              <li className={style.nav__item}>
                <a href="#footer" className={style.nav__link}>
                  Контакты
                </a>
              </li>
              <li className={style.nav__item}>
                <SearchBar theme={headerTheme} menuOpen={menuOpen} />
              </li>
            </ul>
          </nav>
        )}
        <Link href={ROUTES.shoppingCart} className={style.header__basket}>
          <MdOutlineLocalMall />
        </Link>
      </div>
    </header>
  );
};

export default Header;
