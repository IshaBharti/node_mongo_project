const express = require("express");
var router = express.Router();
const userController = require("../controller/userController");
const authentication = require("../auth/verify");

router.post("/login",userController.loginToken);
router.get("/:id",authentication, userController.getSingleUser);
router.put("/:id",authentication, userController.updateUser);
router.post("/signup", userController.signup);
router.post("/loginuser",userController.login)
router.post("/forgot-password",userController.forgotPassword)
router.post("/reset-password",userController.resetPassword)
module.exports = router;
