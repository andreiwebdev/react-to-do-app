import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppContainer from "./components/Layout/AppContainer";
import TodosContainer from "./components/Layout/TodosContainer";
import TodoInProgressList from "./components/TodoInProgressList/TodoInProgressList";
import TodoList from "./components/TodoList/TodoList";
import TodosHeader from "./components/TodosHeader/TodosHeader";

// Provider
import { TodoProvider } from "./store/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <AppContainer>
        <TodosHeader />
        <DndProvider backend={HTML5Backend}>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-full h-screen max-h-[85vh] p-5 lg:py-10 px-5">
            <TodosContainer>
              <h2>tasks</h2>
              <TodoList />
            </TodosContainer>
            <TodosContainer>
              <h2>in progress</h2>
              <TodoInProgressList />
            </TodosContainer>
            <TodosContainer>
              <h2>completed</h2>
              {/* <TodoList /> */}
            </TodosContainer>
          </div>
        </DndProvider>
      </AppContainer>
    </TodoProvider>
  );
};

export default App;
