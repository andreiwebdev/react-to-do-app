import React, { useContext, useState } from "react";
import TodoContext from "../../store/todo-context";
import Button from "../Button/Button";

const TodosHeader = () => {
  const [todo, setTodo] = useState("");
  const todoCtx = useContext(TodoContext);

  const addTodoHandler = (todoText) => {
    todoCtx.addTodo({
      id: Math.random() * 10,
      text: todoText,
    });
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
