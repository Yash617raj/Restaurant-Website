const express = require("express");
const {
  userSignUp,
  handleUserLogin,
  staticPage,
  homePage,
  handleUserSignUp,
  userLogin,
  handleReading,
} = require("../controllers/index");
const { isValidUser } = require("../middlewares/auth");

const route = express.Router();

route.get("/", staticPage);

route.get("/signup", userSignUp);
route.get("/login", userLogin);

route.post("/handlelogin", handleUserLogin);
route.post("/handlesignup", handleUserSignUp);


route.get("/home", isValidUser, homePage);
route.get("/reading", isValidUser, handleReading);
module.exports =  route;