import React from 'react'
import HogTile from './HogTile'

export default function HogList({ hogs }) {
  const pigPen = hogs.map(hog => <HogTile key={hog.name + hog.weight} hog={hog} />)
  return (
    <div className="ui three stackable cards">{pigPen}</div>
  )
}
