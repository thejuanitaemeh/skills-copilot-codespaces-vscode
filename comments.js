// Create web server using express
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const comments = [
  {
    id: uuidv4(),
    username: "todd",
    comment: "lol that is so funny!",
    post: "1",
  },
  {
    id: uuidv4(),
    username: "sk8erBoi",
    comment: "plz delete your account, todd",
    post: "1",
  },
  {
    id: uuidv4(),
    username: "onlysayswoof",
    comment: "woof woof woof",
    post: "2",
  },
  {
    id: uuidv4(),
    username: "colt",
    comment: "javascript is sooooo cooooollllll",
    post: "2",
  },
];

app.use(bodyParser.json());
app.use(cors());

// GET /comments
app.get("/comments", (req, res) => {
  res.send(comments);
});

// POST /comments
app.post("/comments", (req, res) => {
  const { username, comment, post } = req.body;
  comments.push({ username, comment, post, id: uuidv4() });
  res.send("Comment added!");
});

// GET /comments/:id
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.send(comment);
});

// DELETE /comments/:id
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments.filter((c) => c.id !== id);
  res.send("Comment deleted!");
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

