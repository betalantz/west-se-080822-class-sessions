import React from "react";
import Task from './Task'

function TaskList({ tasks, onDelete }) {

  const taskArr = tasks.map(task => (
    <Task 
      key={task.category + task.text}
      text={task.text}
      category={task.category}
      onDelete={onDelete}
    />
  ))

  return (
    <div className="tasks">
      {taskArr}
    </div>
  );
}

export default TaskList;
