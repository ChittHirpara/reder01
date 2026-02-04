const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" }
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/user/test/:user_id", (req, res) => {
    console.log(req);
    res.status(200).json(users);
});


app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
