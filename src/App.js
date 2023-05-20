import "./App.css";
import { createContext, Provider, useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

export const globalState = new createContext();

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [up, setUp] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const updateData = (newData) => {
    setUp(newData);
  };
  const updateSearch = (search, data) => {
    setSearch(search);
    setFilteredData(data);
  };

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <globalState.Provider
      value={{
        data: data,
        editableObj: up,
        updateData: updateData,
        search: search,
        updateSearch: updateSearch,
        filteredData: filteredData,
      }}
    >
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
    </globalState.Provider>
  );
}

export default App;
