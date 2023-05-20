import React from "react";
import Button from "../Button/Button";

import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/slices/todos.slice";
import { confettiActions } from "../../store/slices/confetti.slice";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const completeTodoHandler = (id) => {
    let index = todos.map((todo) => todo.id).indexOf(id);

    if (todos[index]["status"] !== "Completed") {
      dispatch(todoActions.completeTodo(id));
      dispatch(confettiActions.showConfetti(true));
      setTimeout(() => {
        dispatch(confettiActions.hideConfetti(false));
      }, 5000);
    }
  };

  const removeTodoHandler = (id) => {
    dispatch(todoActions.removeTodo(id));
  };

  const handleSave = ({ value }) => {
    dispatch(
      todoActions.updateTodo({ update: value, id: props.id, key: "text" })
    );
  };

  const dragStarted = (e, id) => {
    e.dataTransfer.setData("todoId", id);
    e.dataTransfer.setData("todoStatus", props.status);
  };

  return (
    <li
      id={props.status}
      draggable
      onDragStart={(e) => dragStarted(e, props.id)}
      className="flex justify-between items-center mb-4 text-sm todo-item"
    >
      <span className="bg-slate-800 rounded-lg text-white p-2 mr-3 text-xs">
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
        onClick={() => completeTodoHandler(props.id)}
        btnClasses="text-[#2ecc71]"
        type="button"
        icon="complete"
      />
      <Button
        onClick={() => removeTodoHandler(props.id)}
        btnClasses="text-[red]"
        type="button"
        icon="remove"
      />
    </li>
  );
};

export default TodoItem;
