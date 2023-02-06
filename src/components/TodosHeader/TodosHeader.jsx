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
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center"
      >
        <input
          className="bg-slate-50 mr-4 text-sm w-[100%] p-2"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Add a todo..."
        />
        <Button type="submit" icon="add" />
      </form>
    </div>
  );
};

export default TodosHeader;
