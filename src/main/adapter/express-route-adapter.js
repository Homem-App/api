const adaptRoute = (controllerRoute) => async (req, res) => {
  const httpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
  };
  const httpResponse = await controllerRoute(httpRequest);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

module.exports = {
  adaptRoute,
}