import React, { useState } from "react";
import useTodo from "../../hooks/useTodo";
import Button from "../Button/Button";

const TodosHeader = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const addTodoHandler = (todoText) => {
    addTodo({ id: Math.random() * 10, text: todoText });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addTodoHandler(todo);
    setTodo("");
  };

  return (
    <div className="text-4xl mb-14">
      <h1 className="mb-4">Add a todo</h1>
      <form onSubmit={submitHandler}>
        <input
          className="bg-slate-50 mr-4"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <Button type="submit" btnText="Add" />
      </form>
    </div>
  );
};

export default TodosHeader;
