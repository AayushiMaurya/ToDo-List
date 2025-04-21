import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo"; 

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "Buy groceries",
    },
    {
      sno: 2,
      title: "Visit the bank",
      desc: "Deposit a check",
    },
  ]);

  const addTodo = (title, desc) => {
    const sno = todos.length ? todos[todos.length - 1].sno + 1 : 1;
    const newTodo = { sno, title, desc };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  return (
    <>
      <Header title="Todo List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={deleteTodo} />
      <Footer />
    </>
  );
}

export default App;

