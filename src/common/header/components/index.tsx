import React from "react";
import Link from "next/link";
import classNames from "classnames";

import CataloguePopup from "./cataloguePopup";
import { SearchBar } from "./searchBar";

import { ROUTES } from "@constants/routes";
import { CATEGORIES } from "@constants/categories";
import { CONTACTS } from "@constants/contacts";

import { IHeaderProps } from "../interfaces";
import { Category } from "src/types/category.type";

import InstagramIcon from "@assets/svg/insta.svg";
import PhoneIcon from "@assets/svg/phone.svg";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import style from "../styles/header.module.scss";

const Header: React.FC<IHeaderProps> = ({
  isMenuOpen,
  headerTheme,
  menuToggleHandler,
}) => {
  return (
    <header
      className={classNames(style.header, style[`header--${headerTheme}`])}
    >
      <div className={classNames("container", style.header__content)}>
        <div className={style.header__toggle}>
          {!isMenuOpen ? (
            <NotesOutlinedIcon onClick={menuToggleHandler} />
          ) : (
            <CloseIcon onClick={menuToggleHandler} />
          )}
        </div>
        <Link href={ROUTES.home}>
          <a
            className={classNames(style.header__logo, style.logo, {
              [style["logo--dark"]]: isMenuOpen,
            })}
          ></a>
        </Link>
        {isMenuOpen ? (
          <nav className={classNames(style.nav, style["nav--open"])}>
            <ul className={classNames("container", style.nav__list)}>
              <li className={style.nav__item}>
                <SearchBar theme={headerTheme} menuOpen={isMenuOpen} />
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
                  {CATEGORIES.map(({ name, path }: Category) => (
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
                <SearchBar theme={headerTheme} menuOpen={isMenuOpen} />
              </li>
            </ul>
          </nav>
        )}
        <Link href={ROUTES.shoppingCart}>
          <a className={style.header__basket}>
            <LocalMallOutlinedIcon />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
