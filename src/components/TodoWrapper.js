import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import EditTodoForm from "./EditTodoForm";
import TodoActions from "./TodoActions";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    ); /*Explicame este filter  */
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
    const clearAll = () => {
    setTodos([]);
  };
   const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  const markAllCompleted = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };
  const markAllUncompleted = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: false })));
  };
  return (
    <div className="TodoWrapper">
      <h1 className="text-yellow title">Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
  
  <TodoActions
        clearAll={clearAll}
        clearCompleted={clearCompleted}
        markAllCompleted={markAllCompleted}
        markAllUncompleted={markAllUncompleted}
      />
    
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
