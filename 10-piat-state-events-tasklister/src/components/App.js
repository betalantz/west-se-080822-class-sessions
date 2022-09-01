import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDelete(taskText){
    console.log('taskText: ', taskText);
    // const filteredArr = tasks.filter(task => task.text !== taskText)
    // setTasks(filteredArr)
    setTasks(tasks.filter(task => task.text !== taskText))
  }

  function handleAddTask(newTaskObj){
    console.log('newTaskObj: ', newTaskObj);
    setTasks([...tasks, newTaskObj])
  }

  const visibleTasks = tasks.filter(task => task.category === selectedCategory || selectedCategory === "All")

  return ( 
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")}
        onFormSubmit={handleAddTask}
      />
      <TaskList tasks={visibleTasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
