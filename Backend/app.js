const dotenv = require("dotenv");
const morgan = require("morgan");
const express = require("express");

dotenv.config({ path: "config.env" });
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Running");
}

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port 8080");
});
