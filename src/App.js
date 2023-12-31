import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import WeatherApp from "./components/WeatherApp";
import Smile from "./components/Smile";

const initialTodos = [
  { id: uuidv4(), title: "Learn React", completed: false },
  { id: uuidv4(), title: "Learn Next.js", completed: false },
  { id: uuidv4(), title: "Learn Tailwind", completed: false },
];

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  const updateLocalStorage = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const handleDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    updateLocalStorage(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    updateLocalStorage(updatedTodos);
  };

  const handleAddTodo = () => {
    if (inputValue === "") return; // Prevent adding empty todos
    const newTodo = {
      id: uuidv4(),
      title: inputValue,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    updateLocalStorage(updatedTodos);
    setInputValue("");
  };

  return (
    <div className="h-screen flex flex-col justify-start items-center bg-[#1c1d1c] color-white text-[#ffffff]">
      <h1 className="text-4xl my-5">To do App</h1>
      <TodoList
        todos={todos}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
      <AddTodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddTodo={handleAddTodo}
      />
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/todo" element={<TodoApp />} />
      {/* Here, you can also add a component for the "/weather" route in the same manner. */}
      <Route path="/weather" element={<WeatherApp />} />
      <Route path="/smile" element={<Smile />} />
    </Routes>
  </Router>
);

export default App;
