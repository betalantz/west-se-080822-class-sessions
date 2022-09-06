import React from 'react'

export default function HogTile({ hog }) {
  const { name, image} = hog
//   console.log('image: ', image);
  return (
    <div className="ui card eight wide column pigTile">
        <img src={image} alt={name} />
        <h3>{name}</h3>
    </div>
  )
}
