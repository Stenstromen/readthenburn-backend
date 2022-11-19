const express = require("express");

const rtbController = require("../controllers/rtb.controllers");
const rtbRouter = express.Router();
const { check } = require("express-validator");

rtbRouter.post(
  "/",
  [
    check("message", "Message cannot be empty").not().isEmpty(),
    check("message", "Message length exceeded").isLength({ max: 500 }),
  ], 
  rtbController.sendMessage
);
rtbRouter.get("/store", rtbController.sendMessageLanding);
rtbRouter.get("/store/:id", rtbController.getMessage);

module.exports = rtbRouter;
