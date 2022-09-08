import React from 'react'

function Store({store}) {
    const {name, season, episode, image} = store
    return (
    <tr>
        <td className="row-name">
            <span>{name}</span>
        </td>
        <td>
            <a href={image} ><b>&#8599;</b></a>
        </td>
        <td>
            <span>{season}</span>
        </td>
        <td>
            <span>{episode}</span>
        </td>
    </tr>
    );
}

export default Store