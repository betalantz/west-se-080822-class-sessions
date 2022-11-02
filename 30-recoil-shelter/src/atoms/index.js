import { atom, selector } from 'recoil'

// a basic atom to initialize state for a budget value of 100
export const budgetState = atom({
    key: 'budgetState',
    default: 100
})

// this atom is more complex because we're initializing it with a default value
// which we'll fetch from an API, but only selectors can execute functions
export const petsState = atom({
    key: 'petsState',
    default: selector({
        key: 'petsLoader',
        get: async () => {
            const response = await fetch("http://localhost:3001/pets")
            const pets = await response.json()
            return pets
        }
    })
})

export const petsFilterState = atom({
    key: 'petsFilterState',
    default: ''
})

// this selector is very representative of how selectors are used in Recoil;
// the callback fn depends on state in two different atoms, so if those state values
// change, this cb function gets re-evaluated
export const filteredPets = selector({
    key: 'filteredPets',
    get: ({get}) => {
        const filter = get(petsFilterState)
        const pets = get(petsState)

        switch (filter) {
            case 'cat':
                return pets.filter(pet => pet.type === 'cat')
            case 'dog':
                return pets.filter(pet => pet.type === 'dog')
            case 'micropig':
                return pets.filter(pet => pet.type === 'micropig')
            default:
                return pets
        }
    }
})



