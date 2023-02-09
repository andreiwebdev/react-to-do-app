import React from "react";
import { useState } from "react";

const TodoContext = React.createContext([{}, () => {}]);

const TodoProvider = (props) => {
  const [state, setState] = useState({
    todos: [],
  });

  return (
    <TodoContext.Provider value={[state, setState]}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
