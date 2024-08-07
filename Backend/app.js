const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: "config.env" });
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port 8080");
});
