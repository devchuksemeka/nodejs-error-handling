const BaseError = require("./BaseError");

module.exports = (err,req,res,next) => {

    if (err instanceof BaseError) {
        return res.status(err.statusCode || 400).json({ 
            status:'error',
            message: err.message,
            name: err.name,
            extras: err.extra
        });
    }
  
    res.status(200).json({
        status:'error',
        message: err.message,
    });
    // next()
};
  