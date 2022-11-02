import React from 'react'
import { petsState } from '../atoms'
import { useRecoilValue } from 'recoil'
import Pet from './Pet'

export default function PetBrowser() {

    const pets = useRecoilValue(petsState)
    console.log('pets: ', pets);
    const petCards = pets.map(pet => <Pet key={pet.id} pet={pet}/>)

  return (
    <div style={{height: "100px", padding: "50px"}}>
        <div className="ui cards">
            {petCards}
        </div>
    </div>
  )
}
