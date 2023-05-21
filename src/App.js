import "./App.css";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import ContextApi from "./context/contextApi";

function App() {
  return (
    <ContextApi>
      <div className="App">
        <div className="container">
          <div className="top">
            <AddTodo />
          </div>
          <div className="list">
            <ShowTodo />
          </div>
        </div>
      </div>
    </ContextApi>
  );
}

export default App;
