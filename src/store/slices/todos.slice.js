import { createSlice } from "@reduxjs/toolkit";

const todoInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: todoInitialState,
  reducers: {
    addTodo(state, action) {
      state.todos = state.todos.concat(action.payload);
    },
    updateTodo(state, action) {
      let index = state.todos.map((todo) => todo.id).indexOf(action.payload.id);

      state.todos[index][action.payload.key] = action.payload.update;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo(state, action) {
      let index = state.todos.map((todo) => todo.id).indexOf(action.payload);
      state.todos[index]["status"] = "Completed";
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
