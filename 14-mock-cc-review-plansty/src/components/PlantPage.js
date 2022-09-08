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

  const filteredPlants = plantsArr.filter(plant => plant.name.toLowerCase().includes(searchString.toLowerCase()))
  // const filteredPlants = plantsArr.filter(plant => plant.name.toLowerCase().includes(searchString.toLowerCase()) || plant.price.toString().includes(searchString))
  
  return (
    <main>
      <NewPlantForm onSubmitPlant={addPlant}/>
      <Search search={searchString} onSearchChange={setSearchString} />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
