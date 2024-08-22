import React from "react";
import { TodoItemProps } from "@/types";

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <li className="flex items-center justify-between bg-gray-100 p-4 mb-2 rounded-lg shadow transition-all duration-300 hover:shadow-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
        />
        <span
          className={`text-lg ${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 focus:outline-none transition-colors duration-300 border-red-500 border-solid border-2 bg-red-500"
      >
        delete
      </button>
    </li>
  );
};

export default TodoItem;
