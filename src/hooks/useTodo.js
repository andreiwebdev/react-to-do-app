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

  function updateTodo(updatedTodo, id) {
    let index = state.todos.map((todo) => todo.id).indexOf(id);
    state.todos[index].text = updatedTodo;
  }

  return {
    todos: state.todos,
    addTodo,
    removeTodo,
    updateTodo,
  };
};

export default useTodo;
