import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import useTodo from "../../hooks/useTodo";

const TodoList = (props) => {
  const { todos, updateTodo } = useTodo();
  const [todosScroll, setTodosScroll] = useState(
    "max-h-[fill] w-full h-full absolute overflow-y-scroll pr-[20px]"
  );

  const draggingOver = (e) => {
    e.preventDefault();
  };

  const dragDropped = (e) => {
    const todoId = e.dataTransfer.getData("todoId");
    updateTodo(e.target.id, Number(todoId), "status");
  };

  return (
    <>
      <ul
        id={props.todosType}
        onDragOver={(e) => draggingOver(e)}
        onDrop={(e) => dragDropped(e)}
        className={todosScroll}
      >
        {todos &&
          todos.map(
            (todo) =>
              todo.status === props.todosType && (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  todo={todo.text}
                  time={todo.timePosted}
                />
              )
          )}
      </ul>
    </>
  );
};

export default TodoList;
