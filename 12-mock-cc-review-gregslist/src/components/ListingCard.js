import React, { useState } from "react";

function ListingCard({listing: {id, description, image, location}, onDelete}) { // since I passed a whole object in the props object, I used nested destructuring, but there are other ways: props.listing.description, props.listing.image, props.listing.location etc
  
  const [isFavorite, setIsFavorite] = useState(false)

  function handleDelete(){
    onDelete(id)
    // I could have done DELETE fetch here, but decided to keep all my fetching together on App
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={() => setIsFavorite(!isFavorite)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsFavorite(!isFavorite)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
