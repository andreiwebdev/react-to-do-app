import React from "react";
import Button from "../Button/Button";
import useTodo from "../../hooks/useTodo";

const TodoItem = (props) => {
  const { removeTodo } = useTodo();

  const removeTodoHandler = (id) => {
    removeTodo(id);
  };

  return (
    <li className="flex justify-between items-center mb-4 text-sm">
      {props.todo}
      <Button
        onClick={removeTodoHandler.bind(null, props.id)}
        btnClasses="text-[red]"
        type="button"
        icon="remove"
      />
    </li>
  );
};

export default TodoItem;
