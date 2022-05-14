import React, { useState } from 'react';
import NewTodo from './components/NewTodo';

import TodoList from './components/TodoList';
import { ToDo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onTodoDelete={todoDeleteHandler} />
    </div>
  );
};

export default App;
