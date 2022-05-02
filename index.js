const express = require("express");
const app = express();
const path = require("path");

let accounts = [
  {
    id: 1,
    username: "paulhal",
    role: "admin",
  },
  {
    id: 2,
    username: "johndoe",
    role: "guest",
  },
  {
    id: 3,
    username: "sarahjane",
    role: "guest",
  },
];

app.use(express.json(), express.static(path.join(__dirname, "public")));

app.get("/users", (req, res) => {
  res.json(accounts);
});

app.listen(3000, () => {
  console.log("server is listening on the PORT 3000");
});
