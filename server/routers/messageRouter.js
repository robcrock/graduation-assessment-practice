/** @format */
const express = require('express');
const router = express();
const messageController = require('../controllers/messageController');

router.get('/getMessages', messageController.getMessages, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/postMessage', messageController.postMessage, (req, res) => {
  return res.status(200).send(res.locals);
});

router.delete(
  '/deleteMessage',
  messageController.deleteMessages,
  (req, res) => {
    return res.status(200).send(res.locals);
  }
);

module.exports = router;
