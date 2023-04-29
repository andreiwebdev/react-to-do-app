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
        <div className="grid lg:grid-cols-3 gap-4 w-full h-screen max-h-[85vh] p-5 lg:py-10 px-5">
          <TodosContainer>
            <h2>tasks</h2>
            <TodoList todosType="Todo" />
          </TodosContainer>
          {/* in progress */}
          <TodosContainer>
            <h2>in progress</h2>
            <TodoList todosType="Inprog" />
          </TodosContainer>
          {/* completed */}
          <TodosContainer>
            <h2>completed</h2>
            <TodoList todosType="Completed" />
          </TodosContainer>
        </div>
      </AppContainer>
    </TodoProvider>
  );
};

export default App;
