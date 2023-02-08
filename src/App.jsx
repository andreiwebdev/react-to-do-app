import AppContainer from "./components/Layout/AppContainer";
import TodosContainer from "./components/Layout/TodosContainer";
import TodoList from "./components/TodoList/TodoList";
import TodosHeader from "./components/TodosHeader/TodosHeader";

// Provider
import { TodoProvider } from "./store/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <AppContainer>
        <TodosHeader />
        {/* tasks */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-full h-screen max-h-[85vh] p-5 lg:py-10 px-5">
          <TodosContainer>
            <h2>tasks</h2>
          </TodosContainer>
          {/* in progress */}
          <TodosContainer>
            <h2>in progress</h2>
          </TodosContainer>
          {/* completed */}
          <TodosContainer>
            <h2>completed</h2>
          </TodosContainer>
        </div>
        {/* <TodosContainer>
          <TodosHeader />
          <TodoList />
        </TodosContainer> */}
      </AppContainer>
    </TodoProvider>
  );
};

export default App;
