import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import useTodo from "../../hooks/useTodo";

const TodoList = (props) => {
  const { todos, updateTodo } = useTodo();
  const [todosType, setTodosType] = useState(props.todosType);
  const [todosScroll, setTodosScroll] = useState(
    "max-h-[fill] w-full h-full absolute pr-[45px]"
  );

  useEffect(() => {
    if (todos.length >= 11) {
      setTodosScroll(
        "max-h-[fill] w-full h-full absolute overflow-y-scroll pr-[30px]"
      );
    } else {
      setTodosScroll("max-h-[fill] w-full h-full absolute pr-[45px]");
    }
  }, [todos]);

  const draggingOver = (e) => {
    e.preventDefault();
  };

  const dragDropped = (e) => {
    const todoId = e.dataTransfer.getData("todoId");
    updateTodo("In Progress", Number(todoId), "status");
    // setTodosType("test");
  };

  const todosItems = (
    <>
      {props.todosType === "To do" && (
        <ul className={todosScroll}>
          {todos &&
            todos.map(
              (todo) =>
                todo.status === "To do" && (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    todo={todo.text}
                    time={todo.timePosted}
                  />
                )
            )}
        </ul>
      )}
      {props.todosType === "In Progress" && (
        <ul
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDropped(e)}
          className={todosScroll}
        >
          {todos &&
            todos.map(
              (todo) =>
                todo.status === "In Progress" && (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    todo={todo.text}
                    time={todo.timePosted}
                  />
                )
            )}
        </ul>
      )}
      {props.todosType === "Completed" && (
        <ul className={todosScroll}>
          {todos &&
            todos.map(
              (todo) =>
                todo.status === "Completed" && (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    todo={todo.text}
                    time={todo.timePosted}
                  />
                )
            )}
        </ul>
      )}
    </>
  );

  return todosItems;
};

export default TodoList;
