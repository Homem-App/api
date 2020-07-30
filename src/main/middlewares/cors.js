const cors = (req, res, next) => {
  res.set('access-control-allow-origin', '*');
  res.set('access-control-allow-methos', '*');
  res.set('access-control-allow-headers', '*');
  next();
}

module.exports = {
  cors,
};