const { okResponse } = require('../helper/http-helper');
class CheckStatus {
  async index () {
    return okResponse()
  }
}

module.exports = new CheckStatus();