import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

const useTodo = () => {
  const [state, setState] = useContext(TodoContext);

  function addTodo(todo) {
    setState((state) => ({ todos: state.todos.concat(todo) }));
  }

  function removeTodo(id) {
    let updatedTodos = state.todos.filter((todo) => {
      todo.id !== id;
    });
    setState((state) => ({ todos: updatedTodos }));
  }

  return {
    todos: state.todos.length > 0 ? state.todos : [],
    addTodo,
    removeTodo,
  };
};

export default useTodo;
