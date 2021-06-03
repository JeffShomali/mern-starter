var express = require('express');
var router = express.Router();
const { authJwt } = require("../middleware");
const { userController } = require("../controllers/");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", userController.allAccess);
  app.get("/api/test/user", [authJwt.verifyToken], userController.userBoard);
};
