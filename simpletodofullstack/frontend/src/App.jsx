import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  let [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todolist").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
