import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");

  };
  console.log(toDos);
  return <div>
    <h1>My To Do ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={toDo} placeholder="Write your to do " />
      <button>Add To DO</button>
    </form>
    <hr />
    {toDos.map((item, index) => <li key={index}>{item}</li>)}
  </div>;
}

export default App;