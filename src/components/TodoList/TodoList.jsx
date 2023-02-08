import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import useTodo from "../../hooks/useTodo";

const TodoList = () => {
  const { todos } = useTodo();
  const [todosScroll, setTodosScroll] = useState(
    "max-h-[fill] w-full h-full absolute pr-[45px]"
  );

  useEffect(() => {
    if (todos.length >= 2) {
      setTodosScroll(
        "max-h-[fill] w-full h-full absolute overflow-y-scroll pr-[30px]"
      );
    } else {
      setTodosScroll("max-h-[fill] w-full h-full absolute pr-[45px]");
    }
  }, [todos]);

  const todosItems = (
    <ul className={todosScroll}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} todo={todo.text} />
      ))}
    </ul>
  );

  return todosItems;
};

export default TodoList;
