import React from "react";

function Task({ category, text, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => onDelete(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
