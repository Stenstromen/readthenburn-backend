const express = require("express");

const rtbController = require("../controllers/rtb.controllers");
const rtbRouter = express.Router();
const { check, param } = require("express-validator");

rtbRouter.post(
  "/",
  [
    check("message", "Message cannot be empty").not().isEmpty(),
    check("message", "Message length exceeded").isLength({ max: 120 }),
  ],
  rtbController.sendMessage
);
rtbRouter.get("/:id", [
  param("id", "Id cannot be empty").not().isEmpty(),
  param("id", "Id length exceeded").isLength({ max: 37 })
] ,rtbController.getMessage);

module.exports = rtbRouter;
