import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from './NewListingForm'

const baseURL = "http://localhost:6001/listings"

function App() {
  const [listingsArr, setListingsArr] = useState([]) // always initialize state with the same datatype it will be after any state changes 
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("id")

  // this useEffect will fire once when component first mounts into DOM due to empty dependency array
  useEffect(() => {
    fetch(baseURL, {method: 'GET'}) // method here is extra, GET is the default for fetch
      .then(r => r.json())
      .then(setListingsArr) // take the fetched data and put it into state
  }, [])

  const addListing = newListing => {
    // console.log('newListing: ', newListing); // use console.logs to test that callback functions are getting passed down the component tree correctly and the right data is arriving to this function
    const config = { // I like to create this object of fetch options before I do the actual fetch, but you can compose it inside the fetch
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newListing)
    }
    fetch(baseURL, config)
      .then(res => res.json())
      .then(newListing => setListingsArr([...listingsArr, newListing])) // pessimistic rendering; dependent on fetch resolution
  }

  const deleteListing = id => {
    // console.log('id: ', id);
    const filteredArr = listingsArr.filter(listing => listing.id != id)
    setListingsArr(filteredArr) // optimistic rendering; will remove listing from DOM no matter what happens on the backend
    // setListingsArr(listingsArr.filter(listing => listing.id != id)) // this is a possible refactor of the 2 preceding lines
    fetch(baseURL + `/${id}`, {method: 'DELETE'}) // fetch to backend; independent from frontend rendering
    // we don't need to .then because the only response will be {} and status codes.  We *could* add some error checking with conditionals and the status codes to make sure the delete was successful
  }

  const displayedListings = listingsArr
    .filter(listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase())) // when searchTerm is "", returns all listings; .toLowerCase() makes it case insensitive
    .sort((listingA, listingB) => {
      if (sortBy === "id") {
        return listingA.id - listingB.id
      } else {
        return listingA.location.localeCompare(listingB.location) // let's you sort alphabetically by location
      }
    })

  return (
    <div className="app">
      <Header onSearch={setSearchTerm} onSelectSort={setSortBy}/>
      <NewListingForm onSubmitListing={addListing}/>
      <ListingsContainer 
        listings={displayedListings}
        onDelete={deleteListing}
      />
    </div>
  );
}

export default App;
