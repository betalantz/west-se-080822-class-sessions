import React from "react";
import { useRecoilState } from 'recoil'
import { petsFilterState } from '../atoms'

function Filters() {

  const [filter, setFilter] = useRecoilState(petsFilterState)
  // console.log('filter: ', filter);

  function handleChange ({target: {value}}) {
    setFilter(value)
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field" style={{width: '30vw', margin: '0 auto', padding: '20 20'}}>
        <select value={filter} name="type" id="type" aria-label="type" onChange={handleChange}>
          <option value="">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
