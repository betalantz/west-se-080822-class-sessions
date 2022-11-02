import React from 'react'
import { petsState } from '../atoms'
import { useSetRecoilState } from 'recoil'

export default function Pet({pet}) {

    const setPets = useSetRecoilState(petsState)
   
    const handleAdoptedClick = async () => {
      const config = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isAdopted: true})
      }
      const response = await fetch(`http://localhost:3001/pets/${pet.id}`, config)
      const updatedPet = await response.json()
      setPets(prevPets => prevPets.map(pp => pp.id === pet.id ? updatedPet : pp))
    }
    
    
    
    return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === "female" ? "♀" : "♂"}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdoptedClick}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  )
}
