var express = require("express");
var authService = require("../services/authService");
var router = express.Router();
var jwt = require('jsonwebtoken');

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
    const newClient = await authService.register(userData);
    const token = await authService.createToken(newClient.id)
    res.json({ token, success: { messages: 'successfully registered' } });
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ error: { messages: ['Something went wrong. Please try after a while'] } })
  }

});

router.post("/sign-in", async function (req, res, next) {
  try {
    const userData = req.body;
    const existingUserWithEmail = await authService.getOne({ email: userData.email });
    if (!existingUserWithEmail) {
      return res.status(404).json({ error: { messages: [`Email '${userData.email}' is not registered`] } })
    }
    const passwordMatches = await authService.signIn(userData)
    if (!passwordMatches) {
      return res.status(401).json({ error: { messages: [`Email and password doesn't matches. Please Try Again!`] } })
    }

    const token = await authService.createToken(existingUserWithEmail.id)

    res.json({ token, success: { messages: 'Successfully signed In' } });
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ error: { messages: ['Something went wrong. Please try after a while'] } })
  }
});

module.exports = router;
