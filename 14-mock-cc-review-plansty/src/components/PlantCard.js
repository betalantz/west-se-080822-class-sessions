import React, { useState } from "react";

function PlantCard({plant, onUpdatePrice, onDeletePlant}) {


  const [isInStock, setIsInStock] = useState(true)
  const [price, setPrice] = useState("")
  const [showEdit, setShowEdit] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price })
    }
    fetch(`http://localhost:6001/plants/${plant.id}`, config)
      .then(res => res.json())
      .then(updatedPlant => onUpdatePrice(updatedPlant))
    setPrice("")
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {method: "DELETE"})
    onDeletePlant(plant.id)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p onClick={() => setShowEdit(!showEdit)}>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={() => setIsInStock(!isInStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setIsInStock(!isInStock)}>Out of Stock</button>
      )}
      <button className="danger" onClick={handleDelete}>Delete</button>
      {showEdit && <form onSubmit={handleSubmit}>
        <input 
          type="number"
          step="0.01"
          placeholder="New price..."
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button type='submit'>Update Price</button>
      </form>
      }
      
    </li>
  );
}

export default PlantCard;
