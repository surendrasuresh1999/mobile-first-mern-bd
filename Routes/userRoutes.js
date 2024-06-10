const express = require("express");
const {
  createNewUser,
  loginUser,
  getUserInformation,
  forgotPassword,
} = require("../Controllers/userControllers");

const requiredAuth = require("../Middleware/userAuthentication");
const router = express.Router();

// get userinformation route
router.get("/", requiredAuth, getUserInformation);

// signup route
router.post("/signup", createNewUser);

// login route
router.post("/login", loginUser);

// forgot password route
router.put("/update-password", forgotPassword);

module.exports = router;
