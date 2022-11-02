import React from 'react'
import { filteredPets } from '../atoms'
import { useRecoilValue } from 'recoil'
import Pet from './Pet'

export default function PetBrowser() {

    const pets = useRecoilValue(filteredPets)
    // console.log('pets: ', pets);
    const petCards = pets.map(pet => <Pet key={pet.id} pet={pet}/>)

  return (
    <div>
        <div className="pets ui cards">
            {petCards}
        </div>
    </div>
  )
}
