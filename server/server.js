/** @format */
const messageModel = require('./models/MessageModel');
const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');

const messageRouter = require('./routers/messageRouter');

const PORT = 3434;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../views')));
app.use(express.static(path.resolve(__dirname, '../assets')));

app.use('/messages', messageRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
