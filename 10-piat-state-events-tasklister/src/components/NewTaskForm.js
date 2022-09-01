import React, { useState }from "react";

function NewTaskForm({ categories, onFormSubmit }) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const options = categories.map(cat => <option key={cat} value={cat}>{cat}</option>)

  function handleSubmit(e){
    e.preventDefault()
    onFormSubmit({ text, category }) // compose new task object, uses ES6 shorthand for { text: text, category: category}
    setText("")
    setCategory("Code")
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select 
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          value={category}
        >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
