const { httpStatusCode, httpStatusText } = require('../enum/http-enum');

const badRequest = (error) => ({
  statusCode: httpStatusCode.BAD_REQUEST,
  body: error || httpStatusText.BAD_REQUEST,
})

const serverError = (error) => ({
  statusCode: httpStatusCode.SERVER_ERROR,
  body: {
    name: error.name,
    message: error.message,
  } || httpStatusText.SERVER_ERROR,
})

const okResponse = (data) => ({
  statusCode: httpStatusCode.OK,
  body: data || httpStatusText.OK,
})

module.exports = {
  badRequest,
  serverError,
  okResponse,
};
