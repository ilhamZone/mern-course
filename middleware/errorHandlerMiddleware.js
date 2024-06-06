const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("Error Message: ", err);
  const statusCode = err.statusCode || 500;
  const msg = err.message || "Something went wrong, try again later";
  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
