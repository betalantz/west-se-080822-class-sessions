import React from "react";
import Task from './Task'

function TaskList({ tasks }) {

  const taskArr = tasks.map(task => (
    <Task 
      key={task.category + task.text}
      text={task.text}
      category={task.category}
    />
  ))
  
  return (
    <div className="tasks">
      {taskArr}
    </div>
  );
}

export default TaskList;
