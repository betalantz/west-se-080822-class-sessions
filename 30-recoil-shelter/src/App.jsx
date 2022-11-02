import { Suspense } from 'react'
import './App.css'
import Budget from './components/Budget'
import PetBrowser from './components/PetBrowser'
import Filters from './components/Filters'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recoil Shelter</h1>
        <Budget />
        <Filters />
        <Suspense fallback={<div>Loading...</div>}>
          <PetBrowser />
        </Suspense>
      </header>
    </div>
  )
}

export default App
