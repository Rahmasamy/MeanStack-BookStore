

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const bookRoute = require("./Router/bookRoute");
const categoryRoutes = require("./Router/categoryRoute");

const userAuthenticateRoute = require("./Router/userAuthenticateRoute");

const ApiError = require("./Utils/apiError");
const dbConnection = require("./config/database");
const globalErrors = require("./MiddleWare/errorMiddleware");


dotenv.config({ path: "config.env" });

const dbConnection = require("./config/database");
const autherRoute = require("./Router/autherRoute");
const bookRoute=require('./Router/bookRoute')


// connect with db
dbConnection();

// const HttpStatus=require('./utils/httpStatusText');

// express app
const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));



app.use(express.json());

if (process.env.MODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Running"); 
}


app.use("/api/bookstore/authors", autherRoute);

app.use("/api/bookstore", bookRoute);
app.use("/api/bookstore/categories", categoryRoutes);
app.use("/api/bookstore/user", userAuthenticateRoute);

// Global error handling middleware
app.use(globalErrors);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






// Routes


app.use("/api/bookstore", autherRoute);
app.use("/api/bookstore",bookRoute);
// app.all('*',(req,res,next) => {
//   return res.status(404).json({status:HttpStatus.ERROR,data:{course:"not valid url"}})

// })

// listen for changes and reload routes









