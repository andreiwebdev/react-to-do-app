import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoContext from "../../store/todo-context";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  const todosItems = (
    <ul>
      {todoCtx.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} todo={todo.text} />
      ))}
    </ul>
  );

  return todosItems;
};

export default TodoList;
