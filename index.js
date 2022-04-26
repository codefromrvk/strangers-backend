const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/form", async (req, res) => {
  // console.log(req.body);
  const { name } = req.body;
  let reserved = false;

  // const currentName = res.body;
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  data.forEach((ele) => {
    // console.log("n", ele.name);
    const { name: currentName } = ele;

    if (currentName === name) {
      reserved = true;
    }
  });
  res.json({ reserved });
});
app.get("/", (req, res) => {
  console.log(res.body);
  res.json({ status: "ok", message: res.body.name + "1" });
});

app.listen(4000, () => {
  console.log("Server started on 4000");
});
