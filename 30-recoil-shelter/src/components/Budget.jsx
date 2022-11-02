import React from 'react'
import { budgetState } from '../atoms'
import { useRecoilState } from 'recoil'

export default function Budget() {

  const [budget, setBudget] = useRecoilState(budgetState)

  const handleAddTen = () => setBudget(prevBudget => prevBudget + 10)
  const handleSubtract = () => setBudget(prevBudget => prevBudget - 5)

  return (
    <div>
        <h2> Budget</h2>
        <h3>${budget}</h3>
        <div>
            <button className="ui button" onClick={handleAddTen}>Add $10</button>
            <button className="ui button" onClick={handleSubtract}>Subtract $5</button>
        </div>
    </div>
  )
}
