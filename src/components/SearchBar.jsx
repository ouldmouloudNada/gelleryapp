import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  // Event handler for input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Pass the search term to the parent
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search photos..."
        onChange={handleSearch} // Update search term on change
        style={{
          padding: "10px",
          margin: "20px 0",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default SearchBar;
