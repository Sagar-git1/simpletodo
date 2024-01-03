/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
                fetch("http://localhost:3000/completed", {
                  method: "PUT",
                }).then(async () => {
                  const json = await res.json();
                  console.log("mark as completed");
                });
              }}
            >
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
