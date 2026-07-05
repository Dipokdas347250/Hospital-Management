const { errorResponse } = require('../utils/apiResponse');

const authorizeRoles = (...roles) => (req, res, next) => {
  if (!req.user) {
    return errorResponse(res, 401, 'Please login first');
  }

  if (!roles.includes(req.user.role)) {
    return errorResponse(res, 403, 'You do not have permission to perform this action');
  }

  next();
};

module.exports = authorizeRoles;
