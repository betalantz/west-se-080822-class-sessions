import { atom, selector, selectorFamily } from 'recoil'

export const budgetState = atom({
    key: 'budgetState',
    default: 100
})

export const petsState = selector({
    key: 'petsState',
    get: async () => {
        const response = await fetchAllPets()
        return response
    }
})

export const adoptPet = selectorFamily({
    key: 'adoptPet',
    get: petId => async ({get}) => {
        const res = await updatePet(petId)
    }
})

const updatePet = (id) => {
    const config = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: {isAdopted: true}
    }
    return fetch(`http://localhost:3001/pets/`+ id, config).then(res => res.json())
}

const fetchAllPets = () => fetch("http://localhost:3001/pets").then(res => res.json())