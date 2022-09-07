import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App() {
  const [listingsArr, setListingsArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(setListingsArr)
  
    
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listingsArr}/>
    </div>
  );
}

export default App;
