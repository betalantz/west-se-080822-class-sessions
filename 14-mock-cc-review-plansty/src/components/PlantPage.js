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
    // I'll often console log the parameter of a callback function to make sure it gets passed down all the way to
    // the component with the triggering event, and that the caller is sending right data as an argument
    // console.log('newPlantObj: ', newPlantObj);

    // use the spread operator in a new array whenever you want to add a new object to an existing array in state
    setPlantsArr([newPlantObj, ...plantsArr])
  }

  function updatePlants(updatedPlant){
    // const updatedPlants = plantsArr.map(plant => {
    //   if (plant === updatedPlant) return updatedPlant;
    //   return plant;
    // })
     // .map is the way to update one object in an array in state -> to render a change to one component out of a list
    const updatedPlants = plantsArr.map(plant => plant.id === updatedPlant.id ? updatedPlant: plant)
    setPlantsArr(updatedPlants)
  }
  
  function removePlant(plantId){
    // console.log('plantId: ', plantId);

    // .filter is the way to delete an object from a state array -> to remove a component in a list from the DOM
    const updatedPlants = plantsArr.filter(plant => plant.id !== plantId)
    setPlantsArr(updatedPlants)
  }

  // .filter is also often used in search functionality together with .includes
  const filteredPlants = plantsArr.filter(plant => plant.name.toLowerCase().includes(searchString.toLowerCase()))
    // calling .toLowerCase() on both each plant in the array and the searchTerm ensures that your comparison is case insensitive

  /* USE LOGICAL-OR || OPERATOR IF YOU WANT YOUR SEARCH INPUT TO APPLY TO MORE THAN ONE PROPERTY OF THE OBJECTS YOU'RE FILTERING */
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
