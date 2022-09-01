import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)

  function handleDelete(taskText){
    console.log('taskText: ', taskText);
    const filteredArr = tasks.filter(task => task.text !== taskText)
    setTasks(filteredArr)

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
