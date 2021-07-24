/** @format */

const cookie = require('cookies');
const authController = {};

authController.setCookie = (req, res, next) => {
  console.log('req.body Auth Controller', req.body);
  const { password } = req.body;
  res.cookie('pass', 'password');
  return next();
};

module.exports = authController;
