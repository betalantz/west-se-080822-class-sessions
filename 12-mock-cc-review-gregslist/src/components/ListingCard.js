import React, { useState } from "react";

function ListingCard({listing: {id, description, image, location}, onDelete}) {
  
  const [isFavorite, setIsFavorite] = useState(false)

  function handleDelete(){
    onDelete(id)
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
