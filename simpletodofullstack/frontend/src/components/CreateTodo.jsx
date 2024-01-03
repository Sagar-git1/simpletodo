import { useState } from "react";

export function CreateTodo() {
  // react query is optimal solution but we are using some basic approach using states
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  return (
    <>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            console.log(json);
            alert("todo added successfully");
          });
        }}
      >
        Add todo
      </button>
    </>
  );
}
