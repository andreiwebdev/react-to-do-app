import React from "react";
import Button from "../Button/Button";
import useTodo from "../../hooks/useTodo";

const TodoItem = (props) => {
  const { removeTodo } = useTodo();

  const removeTodoHandler = (id) => {
    removeTodo(id);
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
