/** @format */

const express = require('express');
const router = express();
const authController = require('../controllers/authController');

router.post('/setCookie', authController.setCookie, (req, res) => {
  console.log('res.cookie', res.cookie);
  return res.status(200).send('cookie set?');
});

module.exports = router;
