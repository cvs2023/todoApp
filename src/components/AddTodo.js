import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/contextApi";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [describe, setDescribe] = useState("");
  const [id, setId] = useState(1);
  const [search, setSearch] = useState("");
  const value = useContext(Context);

  const handleTitleChange = (title) => {
    setTitle(title);

    if (title == "") {
      value.updateSearch(false, []);
    }
  };
  const handleDescChange = (desc) => {
    setDescribe(desc);

    if (desc == "") {
      value.updateSearch(false, []);
    }
  };
  const handleAddTodo = () => {
    setId((prev) => prev + 1);

    if (title != "" && describe != "") {
      const obj = {
        userId: 1,
        id: id,
        title: title,
        description: describe,
        completed: false,
      };
      const newData = [...value.editableObj, obj];
      value.setUpdateData(newData);

      setTitle("");
      setDescribe("");
    }
  };
  const handleSearch = (val) => {
    if (val == "") {
      value.updateSearch(false, []);
    }
    setSearch(val);

    if (val != "") {
      value.search = true;

      const filtered = value.editableObj.filter(
        (item) => item.title.includes(val) || item.description.includes(val)
      );

      value.updateSearch(true, filtered);
    }
  };
  useEffect(() => {}, [value]);

  return (
    <div>
      <input
        autoFocus
        required
        type="text"
        value={title}
        placeholder="Type your text here"
        onChange={(e) => handleTitleChange(e.target.value)}
      />
      <input
        required
        type="text"
        value={describe}
        placeholder="Add description here"
        onChange={(e) => handleDescChange(e.target.value)}
      />
      <div>
        <button className="btn" onClick={(e) => handleAddTodo()}>
          ADD TODO <i class="fas fa-check todo-icon"></i>
        </button>
      </div>
      <input
        style={{ marginTop: "1.5rem" }}
        required
        type="text"
        value={search}
        placeholder="Search Title/Description Here"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default AddTodo;
