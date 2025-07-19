import React from "react";

const TodoActions = ({
  clearAll,
  clearCompleted,
  markAllCompleted,
  markAllUncompleted,
}) => {
  return (
    <div className="flex justify-between items-center my-6 w-full">
      <button
        type="button"
        onClick={clearAll}
        className="todo-btn px-4 py-2 rounded-xl "
      >
        Borrar todas
      </button>
      <button
        type="button"
        onClick={clearCompleted}
        className="todo-btn rounded-xl bg-red-500"
      >
        Borrar completadas
      </button>
      <button
        type="button"
        onClick={markAllCompleted}
        className=" todo-btn px-4 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
      >
        Marcar todas completadas
      </button>
      <button
        type="button"
        onClick={markAllUncompleted}
        className="todo-btn bg-red-300 rounded-xl "
      >
        Desmarcar todas
      </button>
    </div>
  );
};

export default TodoActions;
