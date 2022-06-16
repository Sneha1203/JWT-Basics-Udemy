const {CustomAPIError} = require('../errors')
const {StatusCode} = require('http-status-codes')
const errorHandlerMiddleware = (error, request, response, next) => {
    if(error instanceof CustomAPIError) {
        return response.status(error.statusCode).json({ msg: error.message })
    }
    return response.status(StatusCode.INTERNAL_SERVER_ERROR).send('Something went wrong try again later...')
}

module.exports = errorHandlerMiddleware