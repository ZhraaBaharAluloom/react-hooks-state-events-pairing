import React from "react";

const SearchBar = ({ handleSearch, search }) => {
  return (
    <div>
      <input
        placeholder="Search by name"
        value={search}
        name="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
