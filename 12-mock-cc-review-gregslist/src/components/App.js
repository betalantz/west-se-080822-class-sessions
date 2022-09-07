import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const baseURL = "http://localhost:6001/listings"

function App() {
  const [listingsArr, setListingsArr] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
    fetch(baseURL, {method: 'GET'})
      .then(r => r.json())
      .then(setListingsArr)
  
    
  }, [])

  const deleteListing = id => {
    console.log('id: ', id);
    const filteredArr = listingsArr.filter(listing => listing.id != id)
    setListingsArr(filteredArr) // optimistic rendering 
    fetch(baseURL + `/${id}`, {method: 'DELETE'}) // fetch to backend; independent from frontend rendering
  }

  const displayedListings = listingsArr.filter(listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="app">
      <Header onSearch={setSearchTerm} />
      <ListingsContainer 
        listings={displayedListings}
        onDelete={deleteListing}
      />
    </div>
  );
}

export default App;
