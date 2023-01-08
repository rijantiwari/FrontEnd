import React, { useState } from 'react';

const TODO_APP_URL = 'https://my-todo-api.com';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Fetch the list of todos from the server
  const getTodos = async () => {
    const response = await fetch(TODO_APP_URL);
    const data = await response.json();
    setTodos(data);
  }

  // Add a new todo to the list
  const addTodo = async (todo) => {
    const response = await fetch(TODO_APP_URL, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setTodos([...todos, data]);
  }

  // Update an existing todo
  const updateTodo = async (todo) => {
    const response = await fetch(`${TODO_APP_URL}/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setTodos(todos.map(t => t.id === data.id ? data : t));
  }

  // Delete a todo from the list
  const deleteTodo = async (todoId) => {
    await fetch(`${TODO_APP_URL}/${todoId}`, {
      method: 'DELETE'
    });
    setTodos(todos.filter(t => t.id !== todoId));
  }

  return (
    <div>
      <button onClick={getTodos}>Get Todos</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => updateTodo(todo)}>Update</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={(event) => {
        event.preventDefault();
        addTodo({ text: event.target.elements.text.value });
        event.target.reset();
      }}>
        <input type="text" name="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
export default TodoApp;