import React from "react";

const AddTodoForm = ({ inputValue, setInputValue, handleAddTodo }) => {
  return (
    <div className="addTodo flex flex-col p-4">
      <input
        type="text"
        className="rounded mb-4 p-2 text-[#1c1d1c] "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="bg-slate-300 border border-white text-[#1c1d1c] m-2 px-2 py-1 rounded"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodoForm;
