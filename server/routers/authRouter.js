/** @format */

const express = require('express');
const router = express();
const authController = require('../controllers/authController');

router.post('/setCookie', authController.setCookie, (req, res) => {
  return res.status(200);
});

module.exports = router;
