import { useReducer } from "react";

import TodoContext from "./todo-context";

const defaultTodoState = {
  todos: [],
};

const todoReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      todos: state.todos.concat(action.todo),
    };
  }

  if (action.type === "REMOVE") {
    let updatedTodos;

    updatedTodos = state.todos.filter((todo) => todo.id != action.id);

    return {
      todos: updatedTodos,
    };
  }

  return defaultTodoState;
};

const TodoProvider = (props) => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const addTodoHandler = (todo) => {
    dispatchTodoAction({ type: "ADD", todo: todo });
  };

  const removeTodoHandler = (id) => {
    dispatchTodoAction({ type: "REMOVE", id: id });
  };

  const todoContext = {
    todos: todoState.todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
