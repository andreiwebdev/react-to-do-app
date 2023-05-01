import AppContainer from "./components/Layout/AppContainer";
import TodosContainer from "./components/Layout/TodosContainer";
import TodoList from "./components/TodoList/TodoList";
import TodosHeader from "./components/TodosHeader/TodosHeader";

import Confetti from "react-confetti";

// Provider
import { TodoProvider } from "./store/TodoContext";
import { useWindowSize } from "react-use";
import { useState } from "react";
import { ConfettiContext } from "./store/ConfettiContext";

const App = () => {
  const [confetti, setConfetti] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <TodoProvider>
      <ConfettiContext.Provider value={{ confetti, setConfetti }}>
        <AppContainer>
          {confetti && <Confetti width={width} height={height} />}
          <TodosHeader />
          {/* tasks */}
          <div className="grid lg:grid-cols-3 gap-4 w-full h-screen max-h-[85vh] p-5 lg:py-10 px-5">
            <TodosContainer>
              <h2 className="capitalize">tasks</h2>
              <TodoList todosType="Todo" />
            </TodosContainer>
            {/* in progress */}
            <TodosContainer>
              <h2 className="capitalize">in progress</h2>
              <TodoList todosType="Inprog" />
            </TodosContainer>
            {/* completed */}
            <TodosContainer>
              <h2 className="capitalize">completed</h2>
              <TodoList todosType="Completed" />
            </TodosContainer>
          </div>
        </AppContainer>
      </ConfettiContext.Provider>
    </TodoProvider>
  );
};

export default App;
