import React from "react";

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button onClick={() => onDelete(todo)} className="btn">Delete</button>
    </div>
  );
};
 
export default Todo;
