const express = require("express");
const menuCtrl = require('../controllers/menu.controller');
const router = express.Router()

router.route("/api/menu")
  .post(menuCtrl.saveMenu)

module.exports=router