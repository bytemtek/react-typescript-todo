import { TodoList } from "./TodoList";

function App() {
  return (
    <div className="flex flex-col sm:flex-row w-full h-screen justify-center items-center bg-rose-100">
      <TodoList />
    </div>
  );
}

export default App;
