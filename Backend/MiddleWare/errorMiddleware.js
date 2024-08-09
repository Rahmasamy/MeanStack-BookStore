const globalErrors = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "development") {
    sendErrorForDev(err, res);
    console.log("development");
    console.log(process.env.NODE_ENV, 1);
  } else {
    sendErrorForProdution(err, res);
    console.log("production");
    console.log(process.env.NODE_ENV, 2);
  }
};

const sendErrorForDev = (err, res) => {
  return res.status(400).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorForProdution = (err, res) => {
  return res.status(400).json({
    status: err.status,
    message: err.message,
  });
};

module.exports = globalErrors;
