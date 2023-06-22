import React from "react";

const Todo = ({ title, completed, id, handleDone, handleDelete }) => {
  const completedClass = completed ? "line-through" : "";
  return (
    <div className="todoItem pl-4 border flex justify-between items-center">
      <p className={completedClass}>{title}</p>
      <div className="buttons flex">
        <button
          onClick={handleDone.bind(null, id)}
          className="bg-green-300 text-[#1c1d1c] m-2 px-2 py-1 rounded"
        >
          Done
        </button>

        <button
          onClick={handleDelete.bind(null, id)}
          className="bg-[#ec0d0d] text-[#1c1d1c] m-2 px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
