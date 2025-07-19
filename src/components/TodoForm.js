import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validamos antes de agregar
    if (value.trim() === "") {
      setError("Por favor, ingresa algún dato antes de agregar la tarea");
      return; // 🔥 importante: salimos sin agregar
    }

    // Si el input no está vacío, agregamos el todo
    addTodo(value.trim());
    setValue("");   // limpiamos el input
    setError("");   // limpiamos el error
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`todo-input ${error ? "input-error" : ""}`}
        value={value}
        placeholder="What is the task for today?"
        onChange={(e) => {
          setValue(e.target.value);
          if (error) setError(""); // limpiar error al escribir
        }}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>

      {error && <p className="error-message text-white">{error}</p>}
    </form>
  );
};

export default TodoForm;
