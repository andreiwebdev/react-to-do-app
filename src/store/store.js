import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todos.slice";
import confettiReducer from "./slices/confetti.slice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    confetti: confettiReducer,
  },
});

export default store;
