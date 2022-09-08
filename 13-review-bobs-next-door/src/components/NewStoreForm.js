import React, {useState} from "react"

function NewStoreForm({ onFormSubmit }) {
    const [formInputs, setFormInputs] = useState({
        name: "",
        image: "",
        episode: "",
        season: ""
    })

    function handleChange(e) {
        const {id, value} = e.target
        setFormInputs({
            ...formInputs,
            [id]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formInputs)
        }
        fetch("http://localhost:8085/stores", config)
          .then(response => response.json())
          .then(newStore => onFormSubmit(newStore))
        setFormInputs({
            name: "",
            image: "",
            episode: "",
            season: ""
        })
    }

    return(
        <form onSubmit={handleSubmit} >
            <input 
              type="text" 
              id="name" 
              placeholder="Store Name" 
              value={formInputs.name} 
              onChange={handleChange}
            />
            <input type="text" id="image" placeholder="Image URL" value={formInputs.image} onChange={handleChange} />
            <input type="number" id="season" placeholder="Season" step="1" value={formInputs.season} onChange={handleChange}/>
            <input type="number" id="episode" placeholder="Episode" step="1" value={formInputs.episode} onChange={handleChange}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;