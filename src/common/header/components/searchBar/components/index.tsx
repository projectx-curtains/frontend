import React from "react";
import classNames from "classnames";
import SearchBarPopup from "./searchBarPopup";
import SearchIcon from "@mui/icons-material/Search";
import { ISearchBarProps } from "../../../interfaces";
import style from "../styles/searchBar.module.scss";

const SearchBar: React.FC<ISearchBarProps> = ({
  theme,
  menuOpen,
  handleSearchItems,
  searchInput,
  setSearchInput,
  isActivePopup,
  setIsActivePopup,
}) => {
  return (
    <div className={classNames(style.search, style[`search--${theme}`])}>
      <form className={style.search__form} onSubmit={handleSearchItems}>
        <input
          className={classNames(style.search__input, {
            [style["search__input--menu-open"]]: menuOpen,
          })}
          maxLength={25}
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
          <SearchIcon />
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
