const test = (req, res, next) => {
  res.status(200).json({
    message: 'Test successful'
  });
  next();
};

module.exports = {
  test,
};