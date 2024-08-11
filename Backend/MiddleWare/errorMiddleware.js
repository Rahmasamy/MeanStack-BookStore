const globalErrors = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (res.headersSent) {
    return next(err);
  }

  if (process.env.NODE_ENV === "development") {
    sendErrorForDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    sendErrorForProduction(err, res);
  } else {
    // Handle unexpected environments
    sendErrorForProduction(err, res);
  }
};

const sendErrorForDev = (err, res) => {
  // Respond with detailed error information
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorForProduction = (err, res) => {
  // Respond with a generic error message
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.isOperational ? err.message : "Something went wrong!",
  });
};

module.exports = globalErrors;
