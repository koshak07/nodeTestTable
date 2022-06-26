const ApiError = require("../error/ApiError");

module.exports = function (req, res, next) {
  if (!req.body.name) {
    return ApiError.forbidden("empty value");
  }
  next();
};
