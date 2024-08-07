const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: "config.env" });
const app = express();

app.get("/api/author", (req, res) => {
  res.send({ auther: ["John Doe", "Jane Doe", "Jim Doe"] });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port 8080");
});
