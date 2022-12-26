import React, { useState } from "react";
import { ISearchBarContainerProps } from "../interfaces";
import SearchBar from "../components";

const SearchBarContainer: React.FC<ISearchBarContainerProps> = ({
  theme,
  menuOpen,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [isActivePopup, setIsActivePopup] = useState(false);

  const handleSearchItems = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsActivePopup(true);
    setSearchInput(isActivePopup ? searchInput : "");
  };

  return (
    <SearchBar
      theme={theme}
      menuOpen={menuOpen}
      handleSearchItems={handleSearchItems}
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      isActivePopup={isActivePopup}
      setIsActivePopup={setIsActivePopup}
    />
  );
};

export default SearchBarContainer;
