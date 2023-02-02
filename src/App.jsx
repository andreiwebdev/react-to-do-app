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
        <TodosContainer>
          <TodosHeader />
          <TodoList />
        </TodosContainer>
      </AppContainer>
    </TodoProvider>
  );
};

export default App;
