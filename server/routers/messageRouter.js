/** @format */
const express = require("express")
const router = express()
const messageController = require("../controllers/messageController")
const authController = require("../controllers/authController")

router.get("/getMessages", messageController.getMessages, (req, res) => {
  return res.status(200).send(res.locals)
})

router.post(
  "/postMessage",
  messageController.postMessage,
  authController.setCookie,
  (req, res) => {
    return res.status(200).send(res.locals)
  }
)

router.delete(
  "/deleteMessage",
  messageController.deleteMessages,
  authController.checkCookie,
  (req, res) => {
    return res.status(200).send(res.locals)
  }
)

module.exports = router
