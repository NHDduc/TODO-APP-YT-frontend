import React, { useEffect, useState } from "react";
import ToDo from "./Components/ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./Utils/HandleAPI";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="Text"
            placeholder="Add ToDoApp..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={ 
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setText, setToDo, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }>
            {isUpdating ? 'Update' : 'Add'}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteMode={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
