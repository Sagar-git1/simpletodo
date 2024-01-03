const express = require("express");
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/todolist", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayload);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });
  res.json({
    msg: "todo created",
  });
});
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});
app.listen("3000");
