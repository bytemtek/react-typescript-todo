import React, { useState } from "react";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn TypeScript", completed: false },
    { id: 3, title: "Learn GraphQL", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const _handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const _handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const _handleClick = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  };

  return (
    <div className="w-[600] bg-rose-300 p-10 rounded shadow">
      <h1 className="text-4xl font-semibold mb-3">Todo List</h1>
      <ul className=" space-y-1 ">
        {todos.length === 0 && <p>No todos, yay!</p>}
        {todos.map((todo) => (
          <div key={todo.id} className="flex flex-row gap-1">
            <li
              onClick={() => _handleToggleTodo(todo.id)}
              className={`${
                todo.completed ? "line-through" : null
              } w-full bg-rose-100 rounded p-2 cursor-pointer hover:bg-rose-200`}
            >
              {todo.title}
            </li>
            <button
              onClick={() => _handleDelete(todo.id)}
              className="bg-red-500 rounded p-2 cursor-pointer hover:bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
      <div className="rounded border border-gray-50 bg-white shadow mt-2">
        <input
          onChange={(e) => setNewTodo(e.currentTarget.value)}
          value={newTodo}
          className="h-12 w-96 bg-white rounded-l-md px-4 focus:outline-none"
          type="text"
          placeholder="Add todo item"
        />
        <button
          onClick={_handleClick}
          className="h-12 w-20 bg-zinc-500 hover:bg-zinc-800 text-white rounded-md  px-4"
        >
          Add
        </button>
      </div>
    </div>
  );
};
