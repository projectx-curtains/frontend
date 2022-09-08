import React from 'react';
import Button from '../../Button';
import { MdSearch } from "react-icons/md";

const SearchBar = ({ theme }) => {

  return (
    <div className={`search search--${theme}`}>
      <input
          className="search__input"
          type="text"
          placeholder="Шторы..."
      />
      <Button
          className="search__button"
          onClick={() => {}}>
            <MdSearch />
      </Button>
    </div>
  );
};

export default SearchBar;