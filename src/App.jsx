import AppContainer from "./components/Layout/AppContainer";
import TodosContainer from "./components/Layout/TodosContainer";
import TodoList from "./components/TodoList/TodoList";
import TodosHeader from "./components/TodosHeader/TodosHeader";

const App = () => {
  return (
    <AppContainer>
      <TodosContainer>
        <TodosHeader />
        <TodoList />
      </TodosContainer>
    </AppContainer>
  );
};

export default App;
