const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "config.env" });
const dbConnection = require("./config/database");
const autherRoute = require("./Router/autherRoute");

const bookRoute = require("./Router/bookRoute");
const categoryRoutes = require("./Router/categoryRoute");

const cors = require("cors");
const ApiError = require("./Utils/apiError");
const globalErrors = require("./MiddleWare/errorMiddleware");
const { createUser } = require("./Controllers/userController");

// connect with db
dbConnection();

// const HttpStatus=require('./utils/httpStatusText');

// express app
const app = express();
app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Running");
}

// Mount Routes
app.use("/api/bookstore", autherRoute);

app.use("/api/bookstore", bookRoute);
app.use("/api/bookstore", categoryRoutes);
app.use("/api/bookstore", createUser);

// app.all("*", (req, res, next) => {
//   next(new ApiError(`Can't find ths route : ${req.originalUrl}`, 400));
// });

app.use(globalErrors);

// app.all('*',(req,res,next) => {
//   return res.status(404).json({status:HttpStatus.ERROR,data:{course:"not valid url"}})

// })

// listen for changes and reload routes
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log("Server running on port 8080");
});

// listen for unhandledRejection to data base
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection error: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down app ...`);
    process.exit(1);
  });
});
