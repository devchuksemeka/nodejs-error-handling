const express = require('express');
const BaseError = require('./errors/BaseError');
const ErrorHandler = require('./errors/ErrorHandler');
const NotFoundError = require('./errors/NotFoundError');
// import { json, urlencoded } from 'body-parser';

const app = express();

app.get('/api/test',(req,res)=>{
    return res.json({status:true,message:'Message body'})
})

/**
 * Testing not found error
 */
app.get('/api/error-test',(req,res)=>{
    throw new NotFoundError()
})

// updateSmsRecords()
app.all('*', (req, res) => {
    throw new BaseError("Route Not Found",{extrsa:'message here'})
});

// handle all errors
app.use(ErrorHandler);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Error Handling App Test: Listening on port ${PORT}!`);
});

// export { app };
