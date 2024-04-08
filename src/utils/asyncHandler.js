const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    try {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    } catch (err) {
      next(err); // Pass any synchronous errors to the error handling middleware
    }
  };
};

export { asyncHandler };
