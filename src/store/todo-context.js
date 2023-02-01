import React from "react";

const TodoContext = React.createContext({
  todos: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
});

export default TodoContext;
