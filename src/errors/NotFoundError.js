const BaseError = require("./BaseError")

class NotFoundError extends BaseError {
    constructor ( message, extra ) {
      super(message || 'Not found error',extra)
      Error.captureStackTrace( this, this.constructor )
      this.name = 'NotFoundError'
    //   this.message = message
    //   if ( extra ) this.extra = extra
    }
    get statusCode() {
        return 404
    }
}

module.exports = NotFoundError