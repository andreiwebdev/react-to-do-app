import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import useTodo from "../../hooks/useTodo";

const TodoList = () => {
  const { todos } = useTodo();

  const todosItems = (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} todo={todo.text} />
      ))}
    </ul>
  );

  return todosItems;
};

export default TodoList;
