const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
      console.log(`database connection: ${conn.connection.host}`);
    })
    .catch((error) => {
      console.error(`database error: ${error}`);
    });
};


module.exports = dbConnection;
