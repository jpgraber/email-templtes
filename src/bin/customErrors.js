const httpStatus = require('http-status-codes')

class RequestValidationError extends Error {
  constructor (message) {

    // Calling parent constructor of base Error class.
    super(message);

    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    this.status = httpStatus.BAD_REQUEST
  }
}


module.exports = {
  RequestValidationError
}
