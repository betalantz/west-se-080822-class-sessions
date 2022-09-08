import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantsArr, setPlantsArr] = useState([])
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(plantArr => setPlantsArr(plantArr))
  }, [])

  function addPlant(newPlantObj){
    setPlantsArr([newPlantObj, ...plantsArr])
  }

  function updatePlants(updatedPlant){
    console.log('updatedPlant: ', updatedPlant);
    // const updatedPlants = plantsArr.map(plant => {
    //   if (plant === updatedPlant) return updatedPlant;
    //   return plant;
    // })
    const updatedPlants = plantsArr.map(plant => plant.id === updatedPlant.id ? updatedPlant: plant)
    setPlantsArr(updatedPlants)
  }
  
  function removePlant(plantId){
    console.log('plantId: ', plantId);
    const updatedPlants = plantsArr.filter(plant => plant.id !== plantId)
    setPlantsArr(updatedPlants)
  }

  const filteredPlants = plantsArr.filter(plant => plant.name.toLowerCase().includes(searchString.toLowerCase()))
  // const filteredPlants = plantsArr.filter(plant => plant.name.toLowerCase().includes(searchString.toLowerCase()) || plant.price.toString().includes(searchString))
  
  return (
    <main>
      <NewPlantForm onSubmitPlant={addPlant}/>
      <Search search={searchString} onSearchChange={setSearchString} />
      <PlantList 
        plants={filteredPlants} 
        onUpdatePrice={updatePlants}
        onDeletePlant={removePlant}
      />
    </main>
  );
}

export default PlantPage;
