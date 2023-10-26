import { TodoProvider } from "./TodoContext";
import TodoCreate from "./components/TodoCreate";
import { createGlobalStyle } from 'styled-components';
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";


function App() {
  return (
    <TodoProvider>
      <createGlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
