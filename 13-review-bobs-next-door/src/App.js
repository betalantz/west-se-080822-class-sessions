import {useState, useEffect} from 'react';
import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

function App() {

  const [storesArr, setStoresArr] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:8085/stores")
      .then(response => response.json())
      .then(setStoresArr)
  }, [])

  function addStore(newStoreObj) {
    // console.log('newStoreObj: ', newStoreObj);
    setStoresArr([...storesArr, newStoreObj])
  }

  const storesToDisplay = storesArr.filter(store => store.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search search={searchTerm} onSearchChange={setSearchTerm}/>
      <NewStoreForm onFormSubmit={addStore} />
      <StoreList stores={storesToDisplay} />
    </div>
  );
}

export default App;
