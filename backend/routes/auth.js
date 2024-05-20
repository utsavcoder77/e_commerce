var express = require("express");
var authService = require("../services/authService");
var router = express.Router();

router.post("/register", async function (req, res, next) {
  const userData = req.body;
  await authService.register(userData);
  res.json({});
});

module.exports = router;
