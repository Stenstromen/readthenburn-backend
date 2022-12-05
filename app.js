const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const app = express();
const rtbRouter = require("./routers/rtb.router");
const AUTHHEADER_PASSWORD = process.env.AUTHHEADER_PASSWORD;

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use((req, res, next) => {
  if (
    !req.headers.authorization ||
    req.headers.authorization !== AUTHHEADER_PASSWORD
  ) {
    return res.status(403).json({ error: "Invalid or no credentials" });
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(rtbRouter);

app.listen(8080, () => {
  console.log("Server listening on localhost:8080");
});
