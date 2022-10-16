import React, { FormEvent, useState } from "react";
import classNames from "classnames";
import SearchBarPopup from "./searchBarPopup";
import { MdSearch } from "react-icons/md";
import style from "../styles/searchBar.module.scss";

interface Props {
  theme: string;
  menuOpen: boolean;
}

const SearchBar = ({ theme, menuOpen }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [isActivePopup, setIsActivePopup] = useState(false);

  const searchItems = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.target.value; //??
    setIsActivePopup(true);
    setSearchInput(isActivePopup ? searchValue : "");
  };

  return (
    <div className={classNames(style.search, style[`search--${theme}`])}>
      <form className={style.search__form} onSubmit={searchItems}>
        <input
          className={classNames(style.search__input, {
            [style["search__input--menu-open"]]: menuOpen,
          })}
          type="text"
          placeholder=""
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className={classNames(style.search__button, {
            [style["search__button--menu-open"]]: menuOpen,
          })}
        >
          <MdSearch />
        </button>
      </form>
      {isActivePopup && (
        <SearchBarPopup
          searchInput={searchInput}
          setIsActivePopup={setIsActivePopup}
        />
      )}
    </div>
  );
};

export default SearchBar;
