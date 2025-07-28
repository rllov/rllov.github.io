import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", query);
    onSearch(query);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex flex-col">
        <input
          type="text"
          placeholder="Search items..."
          className="border p-2 rounded w-full"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="mt-2 btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
