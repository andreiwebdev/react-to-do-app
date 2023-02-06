import React from "react";
import Button from "../Button/Button";
import useTodo from "../../hooks/useTodo";

import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

const TodoItem = (props) => {
  const { removeTodo, updateTodo } = useTodo();

  const removeTodoHandler = (id) => {
    removeTodo(id);
  };

  const handleSave = ({ value }) => {
    updateTodo(value, props.id);
  };

  return (
    <li className="flex justify-between items-center mb-4 text-sm todo-item">
      <EditText
        inputClassName="edit-input"
        name="todo"
        defaultValue={props.todo}
        editButtonProps={{ className: "edit-todo-button hover:animate-wiggle" }}
        showEditButton
        onSave={handleSave}
      >
        {props.todo}
      </EditText>
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
