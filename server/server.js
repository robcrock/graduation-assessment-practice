/** @format */
require("dotenv").config()
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const path = require("path")
const dbConnect = require("./db.js")

const messageRouter = require("./routers/messageRouter")
const authRouter = require("./routers/authRouter")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(express.static(path.resolve(__dirname, "../views")))
app.use(express.static(path.resolve(__dirname, "../assets")))

app.use("/messages", messageRouter)
app.use("/auth", authRouter)

app.listen(process.env.PORT, () => {
  dbConnect()
  console.log(`Server is listening on ${process.env.PORT}`)
})
