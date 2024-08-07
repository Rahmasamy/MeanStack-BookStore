const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "config.env" });
const dbConnection = require("./config/database");
const autherRoute = require("./Router/autherRoute");

// connect with db
dbConnection();

// express app
const app = express();

// Middleware setup

app.use(express.json());

if (process.env.MODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Running"); 
}

// Routes

app.use("/api/auther", autherRoute);

// listen for changes and reload routes
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port 8080");
});
