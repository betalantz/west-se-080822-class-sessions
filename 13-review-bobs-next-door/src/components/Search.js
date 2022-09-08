import React from "react"

function Search({search, onSearchChange}) {
    return(
        <div className="search-container">
            <input value={search} type="text" placeholder="Search names..." onChange={(e) => onSearchChange(e.target.value)} />
        </div>
    );
}

export default Search;