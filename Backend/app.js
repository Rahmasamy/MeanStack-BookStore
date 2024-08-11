/*const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");


const bookRoute = require("./Router/bookRoute");
const categoryRoutes = require("./Router/categoryRoute");
const autherRoute = require("./Router/autherRoute");
const userAuthenticateRoute = require("./Router/userAuthenticateRoute");

const ApiError = require("./Utils/apiError");
const dbConnection = require("./config/database");
const globalErrors = require("./MiddleWare/errorMiddleware");
const { createUser, loginUser } = require("./Controllers/userController");

dotenv.config({ path: "config.env" });
// connect with db
dbConnection();

// const HttpStatus=require('./utils/httpStatusText');

// express app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Running");
}

// Mount Routes
app.use("/api/bookstore", autherRoute);a
app.use("/api/bookstore", bookRoute);
app.use("/api/bookstore", categoryRoutes);
app.use("/api/bookstore", createUser);
app.use("/api/bookstore", loginUser);

app.use("/api/bookstore/user", userAuthenticateRoute);

app.use(globalErrors);

// listen for changes and reload routes
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log("Server running on port 8080 ");
});

// listen for unhandledRejection to data base
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection error: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down app ...`);
    process.exit(1);
  });
});


*/


const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const bookRoute = require("./Router/bookRoute");
const categoryRoutes = require("./Router/categoryRoute");
const autherRoute = require("./Router/autherRoute");
const userAuthenticateRoute = require("./Router/userAuthenticateRoute");

const ApiError = require("./Utils/apiError");
const dbConnection = require("./config/database");
const globalErrors = require("./MiddleWare/errorMiddleware");

dotenv.config({ path: "config.env" });
// connect with db
dbConnection();

// express app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Running");
}

// Mount Routes
app.use("/api/bookstore/authors", autherRoute);
app.use("/api/bookstore/", bookRoute);
app.use("/api/bookstore/categories", categoryRoutes);
app.use("/api/bookstore/user", userAuthenticateRoute);

// Global error handling middleware
app.use(globalErrors);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection error: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error("Shutting down app...");
    process.exit(1);
  });
});








