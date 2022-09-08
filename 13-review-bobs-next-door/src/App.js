import {useState, useEffect} from 'react';
import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

function App() {

  const [storesArr, setStoresArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:8085/stores")
      .then(response => response.json())
      .then(setStoresArr)
  }, [])

  function addStore(newStoreObj) {
    // console.log('newStoreObj: ', newStoreObj);
    setStoresArr([...storesArr, newStoreObj])
  }
  
  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm onFormSubmit={addStore} />
      <StoreList stores={storesArr} />
    </div>
  );
}

export default App;
