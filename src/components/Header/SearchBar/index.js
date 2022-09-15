import React from "react";
import Button from "../../Button";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ theme, menuOpen }) => {
  return (
    <div className={`search search--${theme}`}>
      <input
        className={`search__input ${menuOpen && "search__input--menu-open"}`}
        type="text"
        placeholder=""
      />
      <Button
        className={`search__button ${menuOpen && "search__button--menu-open"}`}
        onClick={() => {}}
      >
        <MdSearch />
      </Button>
    </div>
  );
};

export default SearchBar;
