import React, { useState, useEffect } from "react";
import { MdClose, MdOutlineLocalMall, MdOutlineNotes } from "react-icons/md";
import { scrollDown } from "../../utils/utils";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";
import CataloguePopup from "./CataloguePopup";
import SearchBar from "./SearchBar";

const Header = ({ footerSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerColor, setHeaderColor] = useState("transparent-theme")

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const contactHandler = () => {
        scrollDown(footerSection);
        menuToggleHandler();
    }

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' });

    const openSearchBar = () => {}

    const listenScrollEvent = () => {
        window.scrollY > 10
          ? setHeaderColor("white-theme")
          : setHeaderColor("transparent-theme");
    }

    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent)
    })
    
    return (
        <header className={`header header--${headerColor}`}>
            <div className={`container header__content ${menuOpen && isTabletOrMobile ? "header__content--open" : ""}`}>
                <div className="header__toggle">
                    {!menuOpen ? (
                        <MdOutlineNotes onClick={menuToggleHandler} />
                    ) : (
                        <MdClose onClick={menuToggleHandler} />
                    )}
                </div>
                <Link to="/" className={`header__logo logo ${menuOpen && isTabletOrMobile ? "logo--dark" : ""}`}></Link>
                <nav className={`nav ${menuOpen && isTabletOrMobile ? "nav--open" : ""}`}>
                    <ul className={`nav__list `}>
                        <li className="nav__item">
                            <Link to="/catalogue"
                                id="catalogue-nav"
                                className="nav__link"
                                onClick={menuToggleHandler}>
                                Каталог
                            </Link>
                            <CataloguePopup />
                        </li>
                        <li className="nav__item">
                            <Link to="/curtain-builder"
                                className="nav__link"
                                onClick={menuToggleHandler}>
                                Конструктор штор
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/consultation"
                                className="nav__link"
                                onClick={menuToggleHandler}>
                                Консультация
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#footer"
                                className="nav__link"
                                onClick={contactHandler}>
                                Контакты
                            </Link>
                        </li>
                        <li 
                            className="nav__item"
                            onClick={openSearchBar}>
                            <SearchBar theme={headerColor}/> 
                        </li>
                    </ul>
                </nav>
                <Link to="/shopping-cart" className="header__basket">
                    <MdOutlineLocalMall/>
                </Link>
            </div>
        </header>
    );
};

export default Header;
