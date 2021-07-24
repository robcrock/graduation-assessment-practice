/** @format */
const models = require('../models/MessageModel');
const messageController = {};

messageController.postMessage = async (req, res, next) => {
  console.log('req.body postMessage', req.body);
  try {
    const { message, password } = req.body;

    const newMessage = await models.Message.create({
      message: message,
      password: password,
    });
    res.locals.messages = newMessage;
    return next();
  } catch (err) {
    return next(err);
  }
};

messageController.getMessages = async (req, res, next) => {
  console.log('hello from getMessages');
  try {
    const messages = await models.Message.find({});

    console.log('getMessages messages', messages);
    res.locals.messages = messages;
    return next();
  } catch (err) {
    return next(err);
  }
};

messageController.deleteMessages = async (req, res, next) => {
  try {
    const { _id } = req.body;
    console.log('_id', _id);

    const correctId = await models.Message.findOneAndDelete({ _id: _id });
    console.log('correctId', correctId);
    res.locals.deleted = correctId;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = messageController;
