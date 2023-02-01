import React, { useContext } from "react";
import TodoContext from "../../store/todo-context";
import Button from "../Button/Button";

const TodoItem = (props) => {
  const todoCtx = useContext(TodoContext);

  const removeTodoHandler = (id) => {
    todoCtx.removeTodo(id);
  };

  return (
    <li>
      {props.todo}
      <Button
        onClick={removeTodoHandler.bind(null, props.id)}
        btnClasses="bg-slate-900 text-white p-2 mb-4"
        type="button"
        btnText="Remove"
      />
    </li>
  );
};

export default TodoItem;
