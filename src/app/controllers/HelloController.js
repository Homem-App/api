class HelloController {

  async getHello (req, res) {
    return res.status(200).json({
      data: 'ok',
    });
  }
}
// SINGLETON
module.exports = new HelloController();