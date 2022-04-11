const express = require("express");
var router = express.Router();
const authentication = require("../auth/verify");
const tagController = require("../controller/tagController");
router.post("/insert", authentication, tagController.addtag);
router.get("/getdata", authentication, tagController.gettag);
router.post("/updatedata/:id", authentication, tagController.updatetag);
router.delete("/delete/:id", authentication, tagController.deletetag);
module.exports = router;
