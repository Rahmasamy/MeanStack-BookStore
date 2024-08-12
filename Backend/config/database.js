const mongoose = require("mongoose");

const dbConnection = () => {
<<<<<<< HEAD
  mongoose.connect(process.env.DB_URI).then((conn) => {
    console.log(`database connection: ${conn.connection.host}`);
  });
=======
  mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
      console.log(`database connection: ${conn.connection.host}`);
    })
    .catch((error) => {
      console.error(`database error: ${error}`);
    });
>>>>>>> fa9e1c4 (create data base Schema , finsh part of create auther)
};

module.exports = dbConnection;
