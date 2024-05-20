var express = require("express");
var authService = require("../services/authService");
var router = express.Router();

router.post("/register", async function (req, res, next) {

  try {
    const userData = req.body;
    const existingUserWithEmail = await authService.getOne({ email: userData.email });
    const messages = []
    if (existingUserWithEmail) {
      messages.push(`Email ${userData.email} is already registered`)

    }

    const existingUserWithMobile = await authService.getOne({ mobile: userData.mobile })
    if (existingUserWithMobile) {
      messages.push(`Mobile ${userData.mobile} is already registered`)

    }
    if (messages.length > 0) {
      return res.status(400).json({ error: { messages: messages } })
    }
    await authService.register(userData);
    res.json({ success: { messages: 'successfully registered' } });
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ error: { messages: ['Something went wrong. Please try after a while'] } })
  }

});

module.exports = router;
