import React, { useState } from "react";
import Button from "../../Button";
import { MdSearch } from "react-icons/md";
import SearchBarPopup from "../SearchBarPopup";

const SearchBar = ({ theme, menuOpen }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isActivePopup, setIsActivePopup] = useState(false);

  const searchItems = (e) => {
    e.preventDefault();
    setIsActivePopup(true);
    setSearchInput(isActivePopup ? e.target.value : "");
  };

  return (
    <div className={`search search--${theme}`}>
      <form className="search__form" onSubmit={searchItems}>
        <input
          className={`search__input ${menuOpen && "search__input--menu-open"}`}
          type="text"
          placeholder=""
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          type="submit"
          className={`search__button ${
            menuOpen && "search__button--menu-open"
          }`}
        >
          <MdSearch />
        </Button>
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
