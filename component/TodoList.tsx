import React from "react";
import TodoItem from "./TodoItem";
import { TodoListProps } from "@/types";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <ul className="space-y-4">
      {todos.length === 0 ? (
        <li className="text-center text-gray-500">
          No todos yet. Add one above!
        </li>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
