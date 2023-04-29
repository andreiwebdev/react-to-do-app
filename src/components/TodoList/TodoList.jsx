import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import useTodo from "../../hooks/useTodo";

const TodoList = (props) => {
  const { todos, updateTodo } = useTodo();
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
    updateTodo(e.target.id, Number(todoId), "status");
  };

  return (
    <>
      {props.todosType === "Todo" && (
        <ul
          id="Todo"
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDropped(e)}
          className={todosScroll}
        >
          {todos &&
            todos.map(
              (todo) =>
                todo.status === "Todo" && (
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
      {props.todosType === "Inprog" && (
        <ul
          id="Inprog"
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDropped(e)}
          className={todosScroll}
        >
          {todos &&
            todos.map(
              (todo) =>
                todo.status === "Inprog" && (
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
        <ul
          id="Completed"
          onDragOver={(e) => draggingOver(e)}
          onDrop={(e) => dragDropped(e)}
          className={todosScroll}
        >
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
};

export default TodoList;
