import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="todos-container">
      <h3>Your Todos</h3>
      {todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        todos.map((todo) => (
          <Todo todo={todo} key={todo.sno} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default Todos;
