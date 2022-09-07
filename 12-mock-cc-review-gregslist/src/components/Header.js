import React from "react";
import Search from "./Search";

function Header({ onSearch, onSelectSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch}/> 
      {/* I would maybe refactor my buttons to be one checkbox input instead, but that ends up being a form input and a bit more complicated than button clicks */}
      <button onClick={() => onSelectSort("location")}>Sort By Location</button>
      <button onClick={() => onSelectSort("id")}>Sort By Default</button>
    </header>
  );
}

export default Header;
