import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleDone, handleDelete }) => {
  return (
    <div className="todoContainer border h-3/4 w-2/4">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          id={todo.id}
          handleDone={handleDone}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
