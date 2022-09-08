import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePrice, onDeletePlant }) {
  console.log('plants: ', plants);

  const plantCards = plants.map(plant => (
    <PlantCard 
      key={plant.id} 
      plant={plant} 
      onUpdatePrice={onUpdatePrice}
      onDeletePlant={onDeletePlant}
    />))
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
