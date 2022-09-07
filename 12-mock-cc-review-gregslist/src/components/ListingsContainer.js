import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  // the job of a Container component is just to receive an array and map over it, rendering an array of individual components out of it, and 'containing' all those individual components

  const listingCards = listings.map(listing => (
    <ListingCard 
      key={listing.id} 
      listing={listing}
      onDelete={onDelete}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
