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
    updateTodo(value, props.id, "text", props.status);
  };

  const dragStarted = (e, id) => {
    e.dataTransfer.setData("todoId", id);
  };

  return (
    <li
      draggable
      onDragStart={(e) => dragStarted(e, props.id)}
      className="flex justify-between items-center mb-4 text-sm todo-item"
    >
      <span className="bg-slate-800 rounded-lg text-white p-2 mr-3">
        {props.time}
      </span>
      <EditText
        style={{ borderBottom: "1px solid #1E293B", marginRight: "0.75rem" }}
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
