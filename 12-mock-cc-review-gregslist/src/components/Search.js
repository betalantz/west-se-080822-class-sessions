import React, { useState } from "react";

function Search({ onSearch }) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("submitted");
  // }
  const [formSearch, setFormSearch] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    onSearch(formSearch)
    setFormSearch("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formSearch}
        onChange={(e) => setFormSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
