/** @format */

const cookie = require("cookies")
const authController = {}

authController.setCookie = async (req, res, next) => {
  try {
    console.log("req.body Auth Controller", req.body)
    console.log("req.cookie", req.cookie)
    const { password } = req.body
    console.log("password in auth controller", password)
    const newCookie = await res.cookie("pass", `${password}`, {
      maxAge: 900000,
      httpOnly: true,
    })

    console.log("cookie created", res.cookie)
    return next()
  } catch (err) {
    return next(err)
  }
}

authController.checkCookie = (req, res, next) => {
  // console.log('req.cookie', req.cookies.pass, res.locals.deleted.password);
  // if (req.cookies =)
  return next()
}

module.exports = authController
