import React, { useState, useContext, useEffect } from "react";
import { globalState } from "../App";

const ShowTodo = () => {
  const [data, setData] = useState([]);
  const [editTable, setEditTable] = useState([]);

  const value = useContext(globalState);

  const handleDelete = (i) => {
    const filteredData = value.editableObj.filter((item) => item.id != i.id);

    if (filteredData.length == 0) {
      value.updateSearch(false, [filteredData]);
    }
    value.updateData(filteredData);
  };

  useEffect(() => {
    setData(value.data);
    setEditTable(value.editableObj);
  }, [value]);

  return (
    <div className="show-todo">
      {value.search == true ? (
        <>
          {value.filteredData.length == 0
            ? "No Data Found"
            : value?.filteredData?.map((i, index) => (
                <ul>
                  <h3 className={{ color: "green" }} key={index}>
                    {i.title}
                  </h3>
                </ul>
              ))}
        </>
      ) : (
        <>
          {editTable.length > 0 &&
            editTable?.map((i, index) => (
              <ul style={{ display: "flex", justifyContent: "space-around" }}>
                <h3 key={index}>{i.title}</h3>
                <button className="btn" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </ul>
            ))}
          {data.map((i, index) => (
            <ul>
              <h3 key={index}>{i.title}</h3>
            </ul>
          ))}
        </>
      )}
    </div>
  );
};
export default ShowTodo;
