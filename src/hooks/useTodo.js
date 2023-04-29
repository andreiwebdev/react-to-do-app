import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

const useTodo = () => {
  const [state, setState] = useContext(TodoContext);

  function addTodo(todo) {
    setState((state) => ({ todos: state.todos.concat(todo) }));
  }

  function removeTodo(id) {
    let updatedTodos = state.todos.filter((todo) => todo.id !== id);
    setState((state) => ({ todos: updatedTodos }));
  }

  function updateTodo(update, id, key) {
    let index = state.todos.map((todo) => todo.id).indexOf(id);
    let updatedTodos = [...state.todos];
    updatedTodos[index][key] = update;

    setState((state) => ({ todos: updatedTodos }));
  }

  return {
    todos: state.todos,
    addTodo,
    removeTodo,
    updateTodo,
  };
};

export default useTodo;
