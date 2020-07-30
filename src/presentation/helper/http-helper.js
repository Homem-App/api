const okResponse = (body) => {
  return {
    statusCode: 200,
    body: body || 'Ok',
  }
}

module.exports = {
  okResponse,
}