import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/slices/todos.slice";

const TodoList = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [todosScroll] = useState(
    "max-h-[fill] w-full h-full absolute overflow-y-scroll pr-[20px]"
  );

  const draggingOver = (e) => {
    e.preventDefault();
  };

  const dragDropped = (e) => {
    const todoStatus = e.dataTransfer.getData("");
    const todoId = e.dataTransfer.getData("todoId");

    if (e.target.id !== "" || todoStatus !== "") {
      dispatch(
        todoActions.updateTodo({
          update: e.target.id == "" ? todoStatus : e.target.id,
          id: Number(todoId),
          key: "status",
        })
      );
    }
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
                  status={todo.status}
                />
              )
          )}
      </ul>
    </>
  );
};

export default TodoList;
