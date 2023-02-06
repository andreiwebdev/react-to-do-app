import React, { useState } from "react";
import useTodo from "../../hooks/useTodo";
import Button from "../Button/Button";

const TodosHeader = () => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");
  const { addTodo } = useTodo(null);

  const addTodoHandler = (todoText) => {
    addTodo({ id: Math.random() * 10, text: todoText });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (todo.length === 0) {
      setError("Please submit your todo.");
      return;
    }
    addTodoHandler(todo);
    setTodo("");
    setError(false);
  };

  return (
    <div className="text-4xl mb-14">
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center"
      >
        <input
          className={
            error
              ? "bg-slate-50 mr-4 text-sm w-[100%] focus:outline-none p-2 border-[1px] border-solid border-[red]"
              : "bg-slate-50 mr-4 text-sm w-[100%] focus:outline-none p-2"
          }
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Add a todo..."
        />
        <Button type="submit" icon="add" />
      </form>
      <p className="text-sm text-[red] text-left">{error}</p>
    </div>
  );
};

export default TodosHeader;
