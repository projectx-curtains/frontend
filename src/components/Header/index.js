import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import CataloguePopup from "./CataloguePopup";
import SearchBar from "./SearchBar";

import { HEADER_THEME } from "../../constants";
import { ROUTES } from "../../constants/routes";
import { CATALOGUE } from "../../assets/data/catalogue";
import { CONTACTS } from "../../assets/data/contacts";

import { ReactComponent as InstagramIcon } from "../../assets/svg/insta.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svg/phone.svg";
import { MdClose, MdOutlineLocalMall, MdOutlineNotes } from "react-icons/md";

const Header = () => {
  const colorSwitchPosition = 10;
  const currentScrollPosition = window.scrollY;
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState(HEADER_THEME.transparent);

  const menuToggleHandler = () => {
    setMenuOpen((isOpen) => !isOpen);
    if (currentScrollPosition < colorSwitchPosition) {
      const currentTheme = menuOpen
        ? HEADER_THEME.transparent
        : HEADER_THEME.white;
      setHeaderTheme(currentTheme);
    }
  };

  const pageScrollHandler = () => {
    const currentTheme =
      currentScrollPosition > colorSwitchPosition
        ? HEADER_THEME.white
        : HEADER_THEME.transparent;
    setHeaderTheme(currentTheme);
  };

  useEffect(() => {
    window.addEventListener("scroll", pageScrollHandler);
  });

  return (
    <header className={classNames("header", ` header--${headerTheme}`)}>
      <div className="container header__content">
        <div className="header__toggle">
          {!menuOpen ? (
            <MdOutlineNotes onClick={menuToggleHandler} />
          ) : (
            <MdClose onClick={menuToggleHandler} />
          )}
        </div>
        <Link
          to={ROUTES.home}
          className={classNames("header__logo", "logo", {
            "logo--dark": menuOpen,
          })}
        ></Link>
        {menuOpen ? (
          <nav className="nav nav--open">
            <ul className="container nav__list">
              <li className="nav__item">
                <SearchBar theme={headerTheme} menuOpen={menuOpen} />
              </li>
              <li className="nav__item">
                <Link
                  to={ROUTES.catalogue}
                  className="nav__link nav__link--heading"
                  onClick={menuToggleHandler}
                >
                  Каталог
                </Link>
                <ul className="container nav__list nav__sublist">
                  {CATALOGUE.map(({ name, path }) => (
                    <li className="nav__item">
                      <Link key={name} to={path} className="nav__link">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav__item">
                <Link
                  to={ROUTES.curtainBuilder}
                  className="nav__link nav__link--heading"
                  onClick={menuToggleHandler}
                >
                  Конструктор
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to={ROUTES.consultation}
                  className="nav__link nav__link--heading"
                  onClick={menuToggleHandler}
                >
                  Консультация
                </Link>
              </li>
              <li className="nav__item contacts">
                {CONTACTS.phones.map((phone) => (
                  <div className="contacts__wrapper">
                    <PhoneIcon className="contacts__icon" />
                    <p className="contacts__phone">{phone}</p>
                  </div>
                ))}
                <a
                  href={CONTACTS.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contacts__wrapper contacts__wrapper--insta"
                >
                  <InstagramIcon className="contacts__icon" />
                  <p className="contacts__instagram">Instagram</p>
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="nav">
            <ul className={"nav__list "}>
              <li className="nav__item">
                <Link
                  to={ROUTES.catalogue}
                  id="catalogue-nav"
                  className="nav__link"
                  onClick={menuToggleHandler}
                >
                  Каталог
                </Link>
                <CataloguePopup />
              </li>
              <li className="nav__item">
                <Link
                  to={ROUTES.curtainBuilder}
                  className="nav__link"
                  onClick={menuToggleHandler}
                >
                  Конструктор штор
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to={ROUTES.consultation}
                  className="nav__link"
                  onClick={menuToggleHandler}
                >
                  Консультация
                </Link>
              </li>
              <li className="nav__item">
                <a href="#footer" className="nav__link">
                  Контакты
                </a>
              </li>
              <li className="nav__item">
                <SearchBar theme={headerTheme} />
              </li>
            </ul>
          </nav>
        )}
        <Link to={ROUTES.shoppingCart} className="header__basket">
          <MdOutlineLocalMall />
        </Link>
      </div>
    </header>
  );
};

export default Header;
