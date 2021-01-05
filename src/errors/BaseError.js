class BaseError extends Error {
    constructor ( message, extra ) {
      super()
      Error.captureStackTrace( this, this.constructor )
      this.name = 'BaseError'
      this.message = message
      if ( extra ) this.extra = extra
    }
    get statusCode() {
        return 400
    }
}

module.exports = BaseError