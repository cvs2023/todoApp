import React, { createContext, useState, useEffect } from "react";

export const Context = new createContext();

const ContextApi = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [updateData, setUpdateData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
    <Context.Provider
      value={{
        data: data,
        editableObj: updateData,
        setUpdateData: setUpdateData,
        search: search,
        updateSearch: updateSearch,
        filteredData: filteredData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextApi;
