import React, { useState } from "react";

function PlantCard({plant, onUpdatePrice, onDeletePlant}) {


  const [isInStock, setIsInStock] = useState(true)
  const [price, setPrice] = useState("")
  const [showEdit, setShowEdit] = useState(false) // not in deliverables, but will let me hide the updatePrice form

  function handlePriceSubmit(e){
    e.preventDefault()
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price }) // same as { price: price } the key is the property of the plant object we're updating, the value is the state variable
    }
    fetch(`http://localhost:6001/plants/${plant.id}`, config)
      .then(res => res.json())
      .then(updatedPlant => onUpdatePrice(updatedPlant)) // pessimistic rendering; we're waiting for a successful response from the backend before we update the frontend to show that change
    setPrice("") // reset the form; independent of fetch
  }

  function handleDelete() {
    // delete from the backend (the repsonse is just an empty {})
    fetch(`http://localhost:6001/plants/${plant.id}`, {method: "DELETE"})
    // send the id up to PlantPage so we can remove the plant from state
    onDeletePlant(plant.id)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* I just want to be able to hide the new price form, so put a click listener below */}
      <p onClick={() => setShowEdit(!showEdit)}>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={() => setIsInStock(!isInStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setIsInStock(!isInStock)}>Out of Stock</button>
      )}
      <button className="danger" onClick={handleDelete}>Delete</button>
      {/* we are able to hide the new price form with conditional rendering based on showEdit boolean in state */}
      {showEdit && <form onSubmit={handlePriceSubmit}>
        <input 
          type="number"
          step="0.01"
          placeholder="New price..."
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))} // the input value will be a string by default, so have to change it to a number with parseFloat
        />
        <button type='submit'>Update Price</button>
      </form>
      }
      
    </li>
  );
}

export default PlantCard;
