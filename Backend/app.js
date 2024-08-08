const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");


dotenv.config({ path: "config.env" });
const dbConnection = require("./config/database");
const autherRoute = require("./Router/autherRoute");
const bookRoute=require('./Router/bookRoute')
const cors=require('cors');
// connect with db
dbConnection();

// const HttpStatus=require('./utils/httpStatusText');

// express app
const app = express();
app.use(cors())



app.use(express.json());

if (process.env.MODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Running"); 
}

// Routes


app.use("/api/bookstore", autherRoute);
app.use("/api/bookstore",bookRoute);
// app.all('*',(req,res,next) => {
//   return res.status(404).json({status:HttpStatus.ERROR,data:{course:"not valid url"}})

// })

// listen for changes and reload routes
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port 8080");
});
