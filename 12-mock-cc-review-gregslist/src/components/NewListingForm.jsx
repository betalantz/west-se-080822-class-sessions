import React, { useState }from 'react'

export default function NewListingForm({ onSubmitListing }) {
    const [formData, setFormData] = useState({ // if I'm going to POST this data, I carefully make the shape of this object match the shape of the object I'll send as the body of my request
        description: "",
        image: "", 
        location: ""
    })

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // don't forget to use [] which here means to use a 'computed value' as the key
        })
    }
    // const handleChange = e => {
    // const {name, value} = e.target // sometimes you'll see e.target destructured like this...
    //     setFormData({
    //         ...formData,
    //         [name]: value // don't forget to use [] which here means to use a 'computed value' as the key
    //     })
    // }


    const handleSubmit = e => {
        e.preventDefault()
        onSubmitListing(formData) // both rendering and fetching will be handled on App, so I just need use the cb function to get the data up there
        setFormData({ // reset the local form inputs
            description: "",
            image: "", 
            location: ""
        })
    }

  return (
    <div>
        {/* remember: onSubmit always goes on the <form></form>, never on the submit button! */}
        <form onSubmit={handleSubmit}>
            <input 
              type="text"
              name="description"
              placeholder='Enter description'
              value={formData.description}
              onChange={handleChange}
              />
            <input 
              type="text"
              name="image"
              value={formData.image}
              placeholder='Enter image url'
              onChange={handleChange}
              />
            <input 
              type="text"
              name="location"
              value={formData.location}
              placeholder='Enter location'
              onChange={handleChange}
            />
            <input 
              type="submit"
              value="Add New Listing"
            />
        </form>
    </div>
  )
}
